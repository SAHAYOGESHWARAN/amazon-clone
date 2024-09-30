import express from 'express';
import { createCategory, getCategories, getCategoryById } from '../controllers/categoryController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').get(getCategories).post(protect, admin, createCategory);
router.route('/:id').get(getCategoryById);

export default router;
