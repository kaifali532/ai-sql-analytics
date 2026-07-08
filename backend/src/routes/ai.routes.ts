import { Router } from 'express';
import { askAI, getHistory } from '../controllers/ai.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.use(authenticate);

router.post('/ask', askAI);
router.get('/history/:datasetId', getHistory);

export default router;
