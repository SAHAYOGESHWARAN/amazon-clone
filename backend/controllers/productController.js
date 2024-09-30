import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';

// @desc Get all products
// @route GET /api/products
// @access Public
export const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// @desc Get a product by ID
// @route GET /api/products/:id
// @access Public
export const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        res.status(404);
        throw new Error('Product not found');
    }

    res.json(product);
});

// @desc Get related products by category
// @route GET /api/products/:id/related
// @access Public
export const getRelatedProducts = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        res.status(404);
        throw new Error('Product not found');
    }

    const relatedProducts = await Product.find({ category: product.category }).limit(4);
    res.json(relatedProducts);
});
