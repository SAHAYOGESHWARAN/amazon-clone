import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails } from '../actions/orderActions';

const OrderTrackingPage = ({ match }) => {
    const orderId = match.params.id;
    const dispatch = useDispatch();

    const orderDetails = useSelector((state) => state.orderDetails);
    const { order } = orderDetails;

    useEffect(() => {
        dispatch(getOrderDetails(orderId));
    }, [dispatch, orderId]);

    return (
        <div>
            <h2>Order Tracking</h2>
            {order && (
                <div>
                    <p>Order Status: {order.status}</p>
                    <p>Total Price: ${order.totalPrice}</p>
                    <p>Payment Status: {order.isPaid ? 'Paid' : 'Not Paid'}</p>
                    <p>Delivery Status: {order.isDelivered ? 'Delivered' : 'Not Delivered'}</p>
                </div>
            )}
        </div>
    );
};

export default OrderTrackingPage;
