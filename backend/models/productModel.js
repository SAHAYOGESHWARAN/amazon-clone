import mongoose from 'mongoose';
import reviewSchema from './reviewModel.js';

const productSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        category: { type: String, required: true },
        brand: { type: String, required: true },
        description: { type: String, required: true },
        rating: { type: Number, required: true, default: 0 },
        numReviews: { type: Number, required: true, default: 0 },
        reviews: [reviewSchema], // Embed reviews into product
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
