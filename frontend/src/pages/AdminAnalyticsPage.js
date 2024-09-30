import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnalyticsData } from '../actions/adminActions';

const AdminAnalyticsPage = () => {
    const dispatch = useDispatch();

    const analyticsData = useSelector((state) => state.analyticsData);
    const { loading, error, data } = analyticsData;

    useEffect(() => {
        dispatch(fetchAnalyticsData());
    }, [dispatch]);

    return (
        <div>
            <h1>Admin Analytics Dashboard</h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <div>
                    <p>Total Orders: {data.totalOrders}</p>
                    <p>Total Products: {data.totalProducts}</p>
                    <p>Total Users: {data.totalUsers}</p>
                    <p>Total Revenue: ${data.totalRevenue.toFixed(2)}</p>
                </div>
            )}
        </div>
    );
};

export default AdminAnalyticsPage;
