import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listOrders, deliverOrder } from '../actions/orderActions';

const AdminOrderListPage = () => {
    const dispatch = useDispatch();
    const orderList = useSelector((state) => state.orderList);
    const { orders } = orderList;

    useEffect(() => {
        dispatch(listOrders());
    }, [dispatch]);

    const markAsDelivered = (orderId) => {
        dispatch(deliverOrder(orderId));
    };

    return (
        <div>
            <h2>Orders</h2>
            <ul>
                {orders.map((order) => (
                    <li key={order._id}>
                        Order ID: {order._id} - {order.isDelivered ? 'Delivered' : 'Pending'}
                        {!order.isDelivered && (
                            <button onClick={() => markAsDelivered(order._id)}>Mark as Delivered</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminOrderListPage;
