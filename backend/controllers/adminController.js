import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import Product from '../models/productModel.js';
import User from '../models/userModel.js';

// @desc Get admin analytics data
// @route GET /api/admin/analytics
// @access Private/Admin
const getAnalyticsData = asyncHandler(async (req, res) => {
    const totalOrders = await Order.countDocuments();
    const totalProducts = await Product.countDocuments();
    const totalUsers = await User.countDocuments();

    const totalRevenue = await Order.aggregate([
        { $match: { isPaid: true } },
        { $group: { _id: null, total: { $sum: '$totalPrice' } } },
    ]);

    res.json({
        totalOrders,
        totalProducts,
        totalUsers,
        totalRevenue: totalRevenue[0] ? totalRevenue[0].total : 0,
    });
});

export { getAnalyticsData };
