import express from 'express';
import { addOrderItems, updateOrderToDelivered } from '../controllers/orderController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, addOrderItems);
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);

export default router;
