import React from 'react';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../actions/wishlistActions';

const WishlistButton = ({ productId }) => {
    const dispatch = useDispatch();

    const handleAddToWishlist = () => {
        dispatch(addToWishlist(productId));
    };

    return (
        <button onClick={handleAddToWishlist} className="btn btn-warning">
            Add to Wishlist
        </button>
    );
};

export default WishlistButton;
