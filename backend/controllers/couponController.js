import asyncHandler from 'express-async-handler';
import Coupon from '../models/couponModel.js';

// @desc Create a coupon
// @route POST /api/coupons
// @access Private/Admin
const createCoupon = asyncHandler(async (req, res) => {
    const { code, discountPercentage, validTill } = req.body;

    const coupon = new Coupon({ code, discountPercentage, validTill });
    const createdCoupon = await coupon.save();
    res.status(201).json(createdCoupon);
});
// @desc Apply a coupon
// @route POST /api/coupons/apply
// @access Private
const applyCoupon = asyncHandler(async (req, res) => {
    const { code } = req.body;

    const coupon = await Coupon.findOne({ code });

    if (!coupon) {
        res.status(404);
        throw new Error('Coupon not found');
    }

    // Check if coupon is still valid
    const currentDate = new Date();
    if (currentDate > coupon.validTill) {
        res.status(400);
        throw new Error('Coupon has expired');
    }

    res.json({
        discountPercentage: coupon.discountPercentage,
        validTill: coupon.validTill,
    });
});

export { createCoupon, applyCoupon };

