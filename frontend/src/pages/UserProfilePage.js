import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../actions/userActions';
import { listMyOrders } from '../actions/orderActions';

const UserProfilePage = () => {
    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.userDetails);
    const { user } = userDetails;

    const orderListMy = useSelector((state) => state.orderListMy);
    const { orders } = orderListMy;

    useEffect(() => {
        dispatch(getUserDetails());
        dispatch(listMyOrders());
    }, [dispatch]);

    return (
        <div>
            <h2>My Profile</h2>
            <h3>My Orders</h3>
            <ul>
                {orders.map((order) => (
                    <li key={order._id}>
                        Order ID: {order._id} - {order.isDelivered ? 'Delivered' : 'Not Delivered'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserProfilePage;
