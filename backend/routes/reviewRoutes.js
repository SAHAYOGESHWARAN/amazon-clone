import express from 'express';
import { createReview, getProductReviews } from '../controllers/reviewController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/:id/reviews').post(protect, createReview).get(getProductReviews);

export default router;
