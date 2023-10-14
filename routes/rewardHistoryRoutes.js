import express from 'express';
import { getRewardHistoryController } from '../controller/rewardHistoryController.js';

const router = express.Router();

router.get('/',getRewardHistoryController);

export default router;