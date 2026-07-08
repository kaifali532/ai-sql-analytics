import { GoogleGenerativeAI } from '@google/generative-ai';
import { prisma } from '../lib/prisma';
import logger from '../utils/logger';
import { executeReadOnlyQuery } from './sql.service';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export const processUserQuery = async (userId: string, datasetId: string, prompt: string) => {
  // 1. Fetch Dataset & Schema Context
  const dataset = await prisma.dataset.findFirst({
    where: { id: datasetId, userId },
    include: { columns: true }
  });

  if (!dataset) throw new Error('Dataset not found');

  // 2. Fetch Chat History (Memory)
  const history = await prisma.chatHistory.findMany({
    where: { datasetId },
    orderBy: { createdAt: 'asc' },
    take: 10 // last 10 messages for context window safety
  });

  // 3. Build Prompt with Schema isolation
  const schemaContext = dataset.columns.map(c => 
    `- ${c.name} (${c.type}): nullable=${c.isNullable}, min=${c.min}, max=${c.max}, median=${c.median}`
  ).join('\n');

  const historyContext = history.map(h => `${h.role === 'USER' ? 'User' : 'AI'}: ${h.content}`).join('\n');

  const systemInstruction = `
You are an expert SQL Data Analyst AI.
Your task is to generate ONLY valid PostgreSQL queries based on the user's natural language request.
The table name is "user_data"."${dataset.tableName}".
Here is the schema of the table:
${schemaContext}

Rules:
1. Generate ONLY a valid SELECT query. Do not wrap in markdown \`\`\`sql blocks, just return the raw SQL.
2. NEVER use DROP, DELETE, UPDATE, INSERT, ALTER, CREATE, GRANT, REVOKE, EXEC, or access system tables.
3. If the query requires data filtering, be mindful of exact string matching versus ILIKE.
4. If the prompt cannot be answered via SQL, return "ERROR: <reason>".

Previous Conversation Context:
${historyContext}
  `;

  // 4. Generate SQL
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash", systemInstruction });
  const result = await model.generateContent(prompt);
  let sqlQuery = result.response.text().trim();
  
  // Clean up markdown if the AI mistakenly included it
  if (sqlQuery.startsWith('```sql')) {
    sqlQuery = sqlQuery.replace(/^```sql/, '').replace(/```$/, '').trim();
  }

  if (sqlQuery.startsWith('ERROR:')) {
    // Return conversational error response
    await saveChat(userId, datasetId, 'USER', prompt);
    await saveChat(userId, datasetId, 'AI', sqlQuery);
    return { error: sqlQuery, type: 'text' };
  }

  // 5. Execute SQL securely
  const executionStart = Date.now();
  const queryResult = await executeReadOnlyQuery(sqlQuery);
  const executionTime = Date.now() - executionStart;

  // 6. Generate Insights based on data
  const insightsModel = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  const insightPrompt = `
You are a business intelligence expert. Analyze this query and result set.
Query: ${sqlQuery}
Result Data (first 20 rows max): ${JSON.stringify(queryResult.slice(0, 20))}
Provide:
1. A brief 1-2 sentence business insight.
2. 3 suggested follow-up questions the user could ask next.
Format your response as a JSON object: { "insight": "...", "suggestions": ["...", "...", "..."] }
`;
  
  const insightResult = await insightsModel.generateContent(insightPrompt);
  let insightRaw = insightResult.response.text().trim();
  if (insightRaw.startsWith('```json')) insightRaw = insightRaw.replace(/^```json/, '').replace(/```$/, '').trim();
  
  const insightData = JSON.parse(insightRaw);

  // 7. Save History
  await prisma.queryHistory.create({
    data: {
      userId,
      datasetId,
      prompt,
      sqlQuery,
      executionTime,
      rowsReturned: queryResult.length,
    }
  });

  await saveChat(userId, datasetId, 'USER', prompt);
  await saveChat(userId, datasetId, 'AI', `Generated SQL:\n\`\`\`sql\n${sqlQuery}\n\`\`\`\n\nInsight: ${insightData.insight}`);

  return {
    sqlQuery,
    executionTime,
    data: queryResult,
    insight: insightData.insight,
    suggestions: insightData.suggestions
  };
};

const saveChat = async (userId: string, datasetId: string, role: string, content: string) => {
  await prisma.chatHistory.create({
    data: { userId, datasetId, role, content }
  });
};
