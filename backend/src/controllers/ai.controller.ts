import { Request, Response } from 'express';
import { processUserQuery } from '../services/ai.service';
import { prisma } from '../lib/prisma';
import logger from '../utils/logger';

export const askAI = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).user.userId;
    const { datasetId, prompt } = req.body;

    if (!datasetId || !prompt) {
      res.status(400).json({ error: 'datasetId and prompt are required' });
      return;
    }

    const result = await processUserQuery(userId, datasetId, prompt);

    if ((result as any).error) {
      res.status(400).json(result);
      return;
    }

    res.status(200).json(result);
  } catch (error: any) {
    logger.error('Error in askAI:', error);
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
};

export const getHistory = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).user.userId;
    const { datasetId } = req.params;

    const chatHistory = await prisma.chatHistory.findMany({
      where: { datasetId: datasetId as string, userId },
      orderBy: { createdAt: 'asc' }
    });

    res.status(200).json({ chatHistory });
  } catch (error) {
    logger.error('Error fetching chat history:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
