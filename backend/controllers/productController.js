import Product from '../models/productModel.js';

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// @desc Get related products by category
// @route GET /api/products/:id/related
// @access Public
const getRelatedProducts = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        res.status(404);
        throw new Error('Product not found');
    }

    const relatedProducts = await Product.find({ category: product.category }).limit(4);
    res.json(relatedProducts);
});

export { getRelatedProducts };
