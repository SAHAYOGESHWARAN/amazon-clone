import React from 'react';
import ProductReview from '../components/ProductReview';

const ProductPage = ({ product }) => {
    const submitReview = (review) => {
        console.log('Review submitted:', review);
    };

    return (
        <div>
            <h2>{product.name}</h2>
            <ProductReview onSubmitReview={submitReview} />
        </div>
    );
};

export default ProductPage;
