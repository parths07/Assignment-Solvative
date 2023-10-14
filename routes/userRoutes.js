import express from 'express';
import { createUserController, edituserController, getUserController } from '../controller/userController.js';

const router = express.Router();

router.get('/',getUserController);
router.post('/',createUserController);
router.patch('/',edituserController);

export default router;