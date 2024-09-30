import express from 'express';
import { loginUser, registerUser, getUserProfile, updateUserProfile } from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', registerUser); // Register user
router.post('/login', loginUser); // Login user
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile); // User profile

export default router;
