import React, { useState } from 'react';

const ProductReview = ({ onSubmitReview }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const submitReview = () => {
        onSubmitReview({ rating, comment });
    };

    return (
        <div>
            <h3>Write a Review</h3>
            <select value={rating} onChange={(e) => setRating(e.target.value)}>
                <option value="">Select...</option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
            </select>
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Leave a comment"
            ></textarea>
            <button onClick={submitReview}>Submit</button>
        </div>
    );
};

export default ProductReview;
