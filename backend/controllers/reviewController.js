import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

// @desc Add a new review
// @route POST /api/products/:id/reviews
// @access Private
const createReview = asyncHandler(async (req, res) => {
    const { rating, comment } = req.body;
    const product = await Product.findById(req.params.id);

    if (product) {
        const alreadyReviewed = product.reviews.find((r) => r.user.toString() === req.user._id.toString());

        if (alreadyReviewed) {
            res.status(400);
            throw new Error('Product already reviewed');
        }

        const review = {
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id,
        };

        product.reviews.push(review);
        product.numReviews = product.reviews.length;

        product.rating =
            product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length;

        await product.save();
        res.status(201).json({ message: 'Review added' });
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});

// @desc Get product reviews
// @route GET /api/products/:id/reviews
// @access Public
const getProductReviews = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id).populate('reviews');

    if (product) {
        res.json(product.reviews);
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});

export { createReview, getProductReviews };
