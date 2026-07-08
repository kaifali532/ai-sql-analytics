import { Request, Response } from 'express';
import { prisma } from '../server';
import fs from 'fs';
import { parseCSVAndCreateSchema } from '../services/dataset.service';
import logger from '../utils/logger';

export const uploadDataset = async (req: Request, res: Response): Promise<void> => {
  try {
    const file = req.file;
    if (!file) {
      res.status(400).json({ error: 'No file uploaded' });
      return;
    }

    const userId = (req as any).user.userId;
    const originalName = file.originalname;

    // We send this processing task to our service
    // For large files we could do this async (background worker)
    const dataset = await parseCSVAndCreateSchema(file.path, originalName, userId, file.size, file.mimetype);

    // Cleanup the uploaded file after processing
    fs.unlinkSync(file.path);

    res.status(201).json({ message: 'Dataset uploaded and processed successfully', dataset });
  } catch (error) {
    logger.error('Error uploading dataset:', error);
    res.status(500).json({ error: 'Failed to process dataset' });
  }
};

export const getDatasets = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).user.userId;
    const datasets = await prisma.dataset.findMany({
      where: { userId },
      include: { columns: true },
      orderBy: { createdAt: 'desc' }
    });
    res.status(200).json({ datasets });
  } catch (error) {
    logger.error('Error fetching datasets:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getDatasetById = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).user.userId;
    const { id } = req.params;
    
    const dataset = await prisma.dataset.findFirst({
      where: { id: id as string, userId },
      include: { columns: true }
    });

    if (!dataset) {
      res.status(404).json({ error: 'Dataset not found' });
      return;
    }

    res.status(200).json({ dataset });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteDataset = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).user.userId;
    const { id } = req.params;

    const dataset = await prisma.dataset.findFirst({ where: { id: id as string, userId } });
    if (!dataset) {
      res.status(404).json({ error: 'Dataset not found' });
      return;
    }

    // Drop dynamic table
    await prisma.$executeRawUnsafe(`DROP TABLE IF EXISTS "user_data"."${dataset.tableName}"`);

    // Delete record (cascades related columns, histories, etc)
    await prisma.dataset.delete({ where: { id: id as string } });

    res.status(200).json({ message: 'Dataset deleted successfully' });
  } catch (error) {
    logger.error('Error deleting dataset:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
