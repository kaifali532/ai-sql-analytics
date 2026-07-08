import fs from 'fs';
import csvParser from 'csv-parser';
import * as xlsx from 'xlsx';
import { prisma } from '../lib/prisma';
import { v4 as uuidv4 } from 'uuid';
import logger from '../utils/logger';

export const parseCSVAndCreateSchema = async (filePath: string, originalName: string, userId: string, fileSize: number, mimeType: string) => {
  let rows: any[] = [];
  
  if (originalName.endsWith('.csv')) {
    rows = await parseCSV(filePath);
  } else if (originalName.endsWith('.xls') || originalName.endsWith('.xlsx')) {
    rows = parseExcel(filePath);
  } else {
    throw new Error('Unsupported file format');
  }

  if (rows.length === 0) {
    throw new Error('Dataset is empty');
  }

  // Schema Detection & Statistics
  const columns = detectSchema(rows);
  const tableName = `table_${uuidv4().replace(/-/g, '_')}`;

  // 1. Create dataset record (PENDING)
  const dataset = await prisma.dataset.create({
    data: {
      userId,
      originalName,
      tableName,
      status: 'PROCESSING',
      rowCount: rows.length,
      sizeBytes: fileSize,
      uploadHistory: {
        create: {
          fileName: originalName,
          fileSize,
          mimeType,
          status: 'SUCCESS'
        }
      },
      columns: {
        create: Object.keys(columns).map(col => ({
          name: col,
          type: columns[col].type,
          isNullable: columns[col].nullCount > 0,
          isUnique: columns[col].uniqueCount === rows.length,
          min: columns[col].min?.toString(),
          max: columns[col].max?.toString(),
          average: columns[col].average,
          median: columns[col].median,
          nullCount: columns[col].nullCount,
          uniqueCount: columns[col].uniqueCount
        }))
      }
    }
  });

  try {
    // 2. Create Dynamic Table
    await createDynamicTable(tableName, columns);

    // 3. Batch Insert
    await batchInsert(tableName, Object.keys(columns), rows, columns);

    // Update dataset status
    await prisma.dataset.update({
      where: { id: dataset.id },
      data: { status: 'READY' }
    });

    return dataset;
  } catch (error: any) {
    logger.error('Error during dataset import, rolling back DB record:', error);
    await prisma.dataset.update({
      where: { id: dataset.id },
      data: { status: 'ERROR' }
    });
    throw error;
  }
};

const parseCSV = (filePath: string): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const results: any[] = [];
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });
};

const parseExcel = (filePath: string): any[] => {
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  return xlsx.utils.sheet_to_json(sheet);
};

const detectSchema = (rows: any[]) => {
  if (rows.length === 0) return {};
  
  const sampleSize = Math.min(rows.length, 1000); // Sample first 1000 for types
  const headers = Object.keys(rows[0]);
  const schema: any = {};

  headers.forEach(header => {
    schema[header] = {
      type: 'TEXT',
      nullCount: 0,
      uniqueValues: new Set(),
      values: [] as number[],
      min: null,
      max: null
    };
  });

  rows.forEach(row => {
    headers.forEach(header => {
      let val = row[header];
      if (val === null || val === undefined || val === '') {
        schema[header].nullCount++;
      } else {
        schema[header].uniqueValues.add(val);
        // numeric processing
        const numVal = Number(val);
        if (!isNaN(numVal)) {
          schema[header].values.push(numVal);
        }
      }
    });
  });

  // Decide Types & compute stats
  headers.forEach(header => {
    const col = schema[header];
    col.uniqueCount = col.uniqueValues.size;

    if (col.values.length > 0 && col.values.length === rows.length - col.nullCount) {
      // All non-nulls are numbers
      const isInteger = col.values.every((v: number) => Number.isInteger(v));
      col.type = isInteger ? 'INTEGER' : 'DOUBLE PRECISION';
      col.min = Math.min(...col.values);
      col.max = Math.max(...col.values);
      col.average = col.values.reduce((a: number,b: number)=>a+b, 0) / col.values.length;
      
      const sorted = [...col.values].sort((a,b)=>a-b);
      const mid = Math.floor(sorted.length/2);
      col.median = sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid-1] + sorted[mid])/2;
    } else {
      // Check for boolean
      const boolVals = new Set(Array.from(col.uniqueValues).map((v: any) => v.toString().toLowerCase()));
      if (boolVals.size <= 2 && (boolVals.has('true') || boolVals.has('false') || boolVals.has('yes') || boolVals.has('no'))) {
        col.type = 'BOOLEAN';
      }
    }
  });

  return schema;
};

const createDynamicTable = async (tableName: string, columns: any) => {
  // Ensure schema exists
  await prisma.$executeRawUnsafe(`CREATE SCHEMA IF NOT EXISTS "user_data";`);
  
  let query = `CREATE TABLE "user_data"."${tableName}" (`;
  
  const colDefs = Object.keys(columns).map(col => {
    // Sanitize column name slightly
    const safeCol = col.replace(/[^a-zA-Z0-9_]/g, '_');
    const type = columns[col].type;
    return `"${safeCol}" ${type}`;
  });

  query += colDefs.join(', ') + ');';
  
  await prisma.$executeRawUnsafe(query);
};

const batchInsert = async (tableName: string, headers: string[], rows: any[], columns: any) => {
  const batchSize = 1000;
  for (let i = 0; i < rows.length; i += batchSize) {
    const batch = rows.slice(i, i + batchSize);
    
    // We use a transaction for each batch, or single large query
    // Simplified for robustness:
    let valuesClause = batch.map(row => {
      return '(' + headers.map(header => {
        let val = row[header];
        if (val === null || val === undefined || val === '') return 'NULL';
        
        const type = columns[header].type;
        if (type === 'INTEGER' || type === 'DOUBLE PRECISION') {
          return val;
        }
        if (type === 'BOOLEAN') {
          const lower = val.toString().toLowerCase();
          return (lower === 'true' || lower === 'yes' || lower === '1') ? 'TRUE' : 'FALSE';
        }
        // Escape single quotes for text
        return `'${val.toString().replace(/'/g, "''")}'`;
      }).join(', ') + ')';
    }).join(', ');

    const safeHeaders = headers.map(h => `"${h.replace(/[^a-zA-Z0-9_]/g, '_')}"`).join(', ');
    const query = `INSERT INTO "user_data"."${tableName}" (${safeHeaders}) VALUES ${valuesClause};`;
    
    await prisma.$executeRawUnsafe(query);
  }
};
