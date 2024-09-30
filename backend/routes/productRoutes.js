import express from 'express';
import {
    getProducts,
    getProductById,
    getRelatedProducts
} from '../controllers/productController.js';

const router = express.Router();

router.route('/').get(getProducts); // GET /api/products
router.route('/:id').get(getProductById); // GET /api/products/:id
router.route('/:id/related').get(getRelatedProducts); // GET /api/products/:id/related

export default router;
