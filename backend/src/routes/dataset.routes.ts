import { Router } from 'express';
import multer from 'multer';
import { uploadDataset, getDatasets, getDatasetById, deleteDataset } from '../controllers/dataset.controller';
import { authenticate } from '../middlewares/auth.middleware';

import os from 'os';

const router = Router();
const upload = multer({ dest: os.tmpdir() }); // Temporary storage before processing

router.use(authenticate);

router.post('/upload', upload.single('file'), uploadDataset);
router.get('/', getDatasets);
router.get('/:id', getDatasetById);
router.delete('/:id', deleteDataset);

export default router;
