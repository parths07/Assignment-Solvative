import express from 'express';
import { createP5HistoryController, deleteP5HistoryController, getP5HistoryController } from '../controller/P5HistoryController.js';

const router = express.Router();

router.post('/',createP5HistoryController);
router.delete('/',deleteP5HistoryController);
router.get('/',getP5HistoryController);

export default router;