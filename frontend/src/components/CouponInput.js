import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { applyCoupon } from '../actions/couponActions';

const CouponInput = ({ totalAmount }) => {
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);

    const dispatch = useDispatch();

    const handleApplyCoupon = async () => {
        const { discountPercentage } = await dispatch(applyCoupon(couponCode));
        if (discountPercentage) {
            setDiscount(discountPercentage);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
            />
            <button onClick={handleApplyCoupon}>Apply Coupon</button>
            {discount > 0 && <p>Discount: {discount}%</p>}
            <p>Final Price: ${(totalAmount - (totalAmount * discount) / 100).toFixed(2)}</p>
        </div>
    );
};

export default CouponInput;
