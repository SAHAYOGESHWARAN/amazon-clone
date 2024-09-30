import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProductReview } from '../actions/productActions';

const ReviewForm = ({ productId }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createProductReview(productId, { rating, comment }));
    };

    return (
        <div>
            <h2>Write a Review</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="rating">Rating</label>
                    <select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                        <option value="0">Select...</option>
                        <option value="1">1 - Poor</option>
                        <option value="2">2 - Fair</option>
                        <option value="3">3 - Good</option>
                        <option value="4">4 - Very Good</option>
                        <option value="5">5 - Excellent</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="comment">Comment</label>
                    <textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ReviewForm;
