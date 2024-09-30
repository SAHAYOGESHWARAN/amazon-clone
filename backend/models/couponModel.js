import mongoose from 'mongoose';

const couponSchema = mongoose.Schema({
    code: { type: String, required: true, unique: true },
    discountPercentage: { type: Number, required: true },
    validTill: { type: Date, required: true },
}, { timestamps: true });

const Coupon = mongoose.model('Coupon', couponSchema);
export default Coupon;
