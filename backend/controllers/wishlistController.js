import asyncHandler from 'express-async-handler';
import Wishlist from '../models/wishlistModel.js';

// @desc Add product to wishlist
// @route POST /api/wishlist
// @access Private
const addToWishlist = asyncHandler(async (req, res) => {
    const { productId } = req.body;

    const wishlistItem = new Wishlist({
        user: req.user._id,
        product: productId,
    });

    const createdItem = await wishlistItem.save();
    res.status(201).json(createdItem);
});

// @desc Get user's wishlist
// @route GET /api/wishlist
// @access Private
const getUserWishlist = asyncHandler(async (req, res) => {
    const wishlistItems = await Wishlist.find({ user: req.user._id }).populate('product');
    res.json(wishlistItems);
});

// @desc Remove item from wishlist
// @route DELETE /api/wishlist/:id
// @access Private
const removeFromWishlist = asyncHandler(async (req, res) => {
    const wishlistItem = await Wishlist.findById(req.params.id);

    if (wishlistItem) {
        await wishlistItem.remove();
        res.json({ message: 'Product removed from wishlist' });
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});

export { addToWishlist, getUserWishlist, removeFromWishlist };
