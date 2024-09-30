import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
}, {
    timestamps: true
});

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    reviews: [reviewSchema],  // Define reviews as an array of reviewSchema
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;
