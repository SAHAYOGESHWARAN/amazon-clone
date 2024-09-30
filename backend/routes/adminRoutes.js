import express from 'express';
import { getAnalyticsData } from '../controllers/adminController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/analytics', protect, admin, getAnalyticsData);

export default router;
