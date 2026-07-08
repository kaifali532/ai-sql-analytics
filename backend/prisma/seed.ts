import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed...');

  // Clean the database (Optional but recommended for a clean demo)
  console.log('Clearing existing data...');
  await prisma.activityLog.deleteMany({});
  await prisma.uploadHistory.deleteMany({});
  await prisma.insight.deleteMany({});
  await prisma.chatHistory.deleteMany({});
  await prisma.queryHistory.deleteMany({});
  await prisma.datasetColumn.deleteMany({});
  await prisma.dataset.deleteMany({});
  await prisma.settings.deleteMany({});
  await prisma.user.deleteMany({});

  console.log('Generating Realistic Users...');
  const hashedPassword = await bcrypt.hash('password123', 10);
  
  const users = [];
  const userRoles = ['Admin', 'Data Scientist', 'Analyst', 'Manager', 'Executive'];
  
  // Create Main Demo User
  const demoUser = await prisma.user.create({
    data: {
      email: 'demo@apple.com',
      password: hashedPassword,
      name: 'Tim Cook (Demo)',
      createdAt: faker.date.recent({ days: 60 }),
      settings: {
        create: { theme: 'system', language: 'en', aiModel: 'gemini-1.5-pro' }
      }
    }
  });
  users.push(demoUser);

  for (let i = 0; i < 6; i++) {
    const user = await prisma.user.create({
      data: {
        email: faker.internet.email(),
        password: hashedPassword,
        name: faker.person.fullName(),
        createdAt: faker.date.past({ years: 1 }),
        settings: {
          create: { theme: 'system', language: 'en', aiModel: 'gemini-1.5-pro' }
        }
      }
    });
    users.push(user);
  }

  const datasetNames = [
    'Sales Analytics Q1 2025', 'Customer Orders', 'HR Employee Records', 'Retail Transactions',
    'Hospital Patients', 'Student Performance', 'Product Inventory', 'Logistics Data',
    'Finance Reports', 'Marketing Campaign Results', 'Website Analytics', 'Insurance Claims',
    'Manufacturing Production', 'Customer Support Tickets', 'Banking Transactions',
    'Restaurant Orders', 'Airline Bookings', 'Hotel Reservations', 'Telecom Usage',
    'Energy Consumption', 'Real Estate Listings', 'Ecommerce Orders', 'Healthcare Appointments',
    'Payroll Data', 'University Admissions'
  ];

  console.log(`Generating ${datasetNames.length} Datasets...`);
  const datasets = [];
  
  for (const name of datasetNames) {
    const owner = faker.helpers.arrayElement(users);
    
    // Generate realistic columns based on the dataset name
    const columns = [];
    if (name.includes('Sales') || name.includes('Transactions') || name.includes('Orders') || name.includes('Bookings')) {
      columns.push(
        { name: 'id', type: 'Integer', isPrimaryKey: true, min: '1', max: '10000', average: null },
        { name: 'date', type: 'Date', isPrimaryKey: false, min: '2024-01-01', max: '2025-12-31', average: null },
        { name: 'amount', type: 'Float', isPrimaryKey: false, min: '10.50', max: '5000.00', average: 250.75 },
        { name: 'customer_id', type: 'Integer', isPrimaryKey: false, min: '1', max: '500', average: null },
        { name: 'status', type: 'String', isPrimaryKey: false, uniqueCount: 4, nullCount: 0 }
      );
    } else if (name.includes('HR') || name.includes('Employee') || name.includes('Patients') || name.includes('Admissions')) {
      columns.push(
        { name: 'id', type: 'Integer', isPrimaryKey: true, min: '1', max: '5000', average: null },
        { name: 'first_name', type: 'String', isPrimaryKey: false, uniqueCount: 4800, nullCount: 0 },
        { name: 'last_name', type: 'String', isPrimaryKey: false, uniqueCount: 3500, nullCount: 0 },
        { name: 'department', type: 'String', isPrimaryKey: false, uniqueCount: 12, nullCount: 0 },
        { name: 'salary', type: 'Float', isPrimaryKey: false, min: '45000', max: '250000', average: 85000 }
      );
    } else {
      columns.push(
        { name: 'id', type: 'Integer', isPrimaryKey: true, min: '1', max: '50000', average: null },
        { name: 'category', type: 'String', isPrimaryKey: false, uniqueCount: 25, nullCount: 5 },
        { name: 'value', type: 'Float', isPrimaryKey: false, min: '0.1', max: '99.9', average: 45.2 },
        { name: 'timestamp', type: 'Date', isPrimaryKey: false, min: '2023-01-01', max: '2025-12-31', average: null }
      );
    }

    const rowCount = faker.number.int({ min: 500, max: 2500000 });
    const sizeBytes = rowCount * faker.number.int({ min: 50, max: 200 }); // Roughly 50-200 bytes per row

    const dataset = await prisma.dataset.create({
      data: {
        userId: owner.id,
        originalName: `${name.toLowerCase().replace(/ /g, '_')}.csv`,
        tableName: `user_data_${faker.string.uuid().replace(/-/g, '_')}`,
        status: 'READY',
        rowCount,
        sizeBytes,
        createdAt: faker.date.past({ years: 1 }),
        columns: {
          create: columns
        },
        uploadHistory: {
          create: {
            fileName: `${name.toLowerCase().replace(/ /g, '_')}.csv`,
            fileSize: sizeBytes,
            mimeType: 'text/csv',
            status: 'SUCCESS',
            createdAt: faker.date.past({ years: 1 })
          }
        }
      }
    });
    datasets.push(dataset);
  }

  const queries = [
    'Show top 10 customers by revenue',
    'Which region has the highest sales?',
    'Monthly revenue trend',
    'Find duplicate customer records',
    'Show inactive customers',
    'Highest performing products',
    'Revenue by department',
    'Missing email addresses',
    'Sales summary for Q2',
    'Top performing employees',
    'Average salary by department',
    'Revenue by city',
    'Customer churn rate',
    'Lowest selling products',
    'Order cancellation trends',
    'Inventory below threshold',
    'Supplier performance',
    'Quarterly profit summary',
    'Student admission statistics',
    'Employee attendance report'
  ];

  console.log('Generating Query Histories...');
  for (let i = 0; i < 40; i++) {
    const ds = faker.helpers.arrayElement(datasets);
    const prompt = faker.helpers.arrayElement(queries);
    const isError = Math.random() > 0.85;
    
    await prisma.queryHistory.create({
      data: {
        userId: ds.userId,
        datasetId: ds.id,
        prompt,
        sqlQuery: `SELECT * FROM ${ds.tableName} LIMIT 10; -- Generated mock SQL`,
        executionTime: faker.number.int({ min: 15, max: 3500 }),
        rowsReturned: isError ? 0 : faker.number.int({ min: 1, max: 1000 }),
        isFavorite: Math.random() > 0.9,
        createdAt: faker.date.recent({ days: 90 })
      }
    });
  }

  console.log('Generating Chat Histories...');
  for (let i = 0; i < 25; i++) {
    const ds = faker.helpers.arrayElement(datasets);
    const createdAt = faker.date.recent({ days: 30 });
    
    // User Question
    await prisma.chatHistory.create({
      data: {
        userId: ds.userId,
        datasetId: ds.id,
        role: 'USER',
        content: faker.helpers.arrayElement([
          'Can you analyze the seasonal trends in this dataset?',
          'What are the key drivers of revenue here?',
          'Find anomalies in the last quarter.',
          'Generate a summary of the top 5 performing categories.',
          'Why did the metric drop in November?'
        ]),
        createdAt: createdAt
      }
    });

    // AI Response
    await prisma.chatHistory.create({
      data: {
        userId: ds.userId,
        datasetId: ds.id,
        role: 'AI',
        content: faker.helpers.arrayElement([
          'Based on the SQL analysis, I found a 15% increase in seasonal trends during Q4, primarily driven by holiday sales in the electronics category.',
          'The data indicates that the top 5 categories account for 80% of total volume. Here is the breakdown...',
          'I ran an anomaly detection query. There is a significant deviation (z-score > 3) in the November data, likely due to missing records on Nov 15th.',
          'Here is the SQL I used to find the drivers of revenue. The primary driver appears to be the enterprise customer segment which grew by 22%.'
        ]),
        createdAt: new Date(createdAt.getTime() + faker.number.int({ min: 1000, max: 15000 }))
      }
    });
  }

  console.log('Generating Insights...');
  const insightTypes = ['TREND', 'ANOMALY', 'RECOMMENDATION', 'SUMMARY'];
  for (let i = 0; i < 15; i++) {
    const ds = faker.helpers.arrayElement(datasets);
    await prisma.insight.create({
      data: {
        datasetId: ds.id,
        title: faker.company.catchPhrase(),
        description: faker.lorem.paragraph(),
        type: faker.helpers.arrayElement(insightTypes),
        createdAt: faker.date.recent({ days: 60 })
      }
    });
  }

  console.log('Generating Activity Logs...');
  const actions = [
    'Dataset uploaded', 'Dataset deleted', 'Query executed', 'Dashboard exported',
    'PDF report generated', 'User logged in', 'AI generated insights',
    'Dataset renamed', 'Query shared', 'Chart exported', 'Schema updated'
  ];
  
  for (let i = 0; i < 50; i++) {
    const user = faker.helpers.arrayElement(users);
    await prisma.activityLog.create({
      data: {
        userId: user.id,
        action: faker.helpers.arrayElement(actions),
        details: faker.lorem.sentence(),
        ipAddress: faker.internet.ipv4(),
        createdAt: faker.date.recent({ days: 15 })
      }
    });
  }

  console.log('✅ Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
