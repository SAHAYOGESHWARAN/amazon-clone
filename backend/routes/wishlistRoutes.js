import express from 'express';
import { addToWishlist, getUserWishlist, removeFromWishlist } from '../controllers/wishlistController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, addToWishlist).get(protect, getUserWishlist);
router.route('/:id').delete(protect, removeFromWishlist);

export default router;
