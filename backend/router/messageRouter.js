import express from 'express';
import { sendMessage } from '../Controllers/messageControllers.js';

const router = express.Router();

router.post("/send",sendMessage);

export default router;