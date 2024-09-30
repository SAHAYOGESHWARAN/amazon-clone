import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserWishlist } from '../actions/wishlistActions';

const WishlistPage = () => {
    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.wishlist);
    const { wishlistItems } = wishlist;

    useEffect(() => {
        dispatch(getUserWishlist());
    }, [dispatch]);

    return (
        <div>
            <h2>Your Wishlist</h2>
            <ul>
                {wishlistItems.map((item) => (
                    <li key={item.product._id}>
                        {item.product.name} - ${item.product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WishlistPage;
