import { prisma } from '../lib/prisma';
import logger from '../utils/logger';

export const executeReadOnlyQuery = async (sqlQuery: string): Promise<any[]> => {
  // 1. Pre-validation to reject forbidden keywords
  const forbiddenKeywords = ['DROP', 'DELETE', 'UPDATE', 'INSERT', 'ALTER', 'CREATE', 'GRANT', 'REVOKE', 'EXEC', 'TRUNCATE'];
  const upperQuery = sqlQuery.toUpperCase();

  for (const keyword of forbiddenKeywords) {
    // Check for keyword bounded by word boundaries or at the start/end
    const regex = new RegExp(`\\b${keyword}\\b`);
    if (regex.test(upperQuery)) {
      throw new Error(`Security Violation: Command '${keyword}' is not allowed.`);
    }
  }

  // 2. Prevent Multiple statements
  if (sqlQuery.includes(';')) {
    // Only allow one semi-colon at the very end
    const parts = sqlQuery.split(';').map(p => p.trim()).filter(p => p.length > 0);
    if (parts.length > 1) {
      throw new Error('Security Violation: Multiple SQL statements are not allowed.');
    }
  }

  // 3. System tables validation
  const systemKeywords = ['pg_class', 'pg_user', 'pg_database', 'information_schema'];
  for (const keyword of systemKeywords) {
    if (upperQuery.includes(keyword.toUpperCase())) {
      throw new Error(`Security Violation: Access to system tables (${keyword}) is not allowed.`);
    }
  }

  // 4. Ensure it starts with SELECT or WITH
  const startsWithSelect = upperQuery.startsWith('SELECT');
  const startsWithWith = upperQuery.startsWith('WITH');
  if (!startsWithSelect && !startsWithWith) {
    throw new Error('Security Violation: Only SELECT or WITH queries are permitted.');
  }

  // 5. Execute with Timeout
  // Using Prisma raw query
  // For true timeout we might need pg raw driver with statement_timeout
  try {
    await prisma.$executeRawUnsafe(`SET statement_timeout = 10000;`); // 10 second timeout
    const result = await prisma.$queryRawUnsafe(sqlQuery);
    return result as any[];
  } catch (error: any) {
    logger.error('SQL Execution Error:', error);
    throw new Error(`Execution Failed: ${error.message}`);
  }
};
