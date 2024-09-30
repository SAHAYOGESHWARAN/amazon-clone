import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PayPalButton from '../components/PayPalButton';
import CODButton from '../components/CODButton';
import { createOrder } from '../actions/orderActions';

const CheckoutPage = () => {
    const dispatch = useDispatch();

    const [paymentMethod, setPaymentMethod] = useState('PayPal');
    const cart = useSelector((state) => state.cart);

    const { cartItems, shippingAddress } = cart;

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

    const handleOrderCreation = () => {
        dispatch(createOrder({
            orderItems: cartItems,
            shippingAddress,
            paymentMethod,
            totalPrice
        }));
    };

    const onSuccess = () => {
        handleOrderCreation();
        alert('Order placed successfully!');
    };

    return (
        <div>
            <h2>Checkout</h2>

            <div>
                <h4>Select Payment Method:</h4>
                <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                    <option value="PayPal">PayPal</option>
                    <option value="Cash on Delivery">Cash on Delivery</option>
                </select>
            </div>

            <h3>Total: ${totalPrice}</h3>

            {paymentMethod === 'PayPal' ? (
                <PayPalButton amount={totalPrice} onSuccess />
                ) : (
                    <CODButton onSuccess={onSuccess} />
                )}
            </div>
        );
    };
    
    export default CheckoutPage;
    