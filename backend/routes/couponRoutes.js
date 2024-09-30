import express from 'express';
import { createCoupon, applyCoupon } from '../controllers/couponController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, admin, createCoupon);
router.route('/apply').post(protect, applyCoupon);

export default router;
