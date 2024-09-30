import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboardPage = () => {
    return (
        <div>
            <h2>Admin Dashboard</h2>
            <ul>
                <li>
                    <Link to="/admin/userlist">Manage Users</Link>
                </li>
                <li>
                    <Link to="/admin/productlist">Manage Products</Link>
                </li>
                <li>
                    <Link to="/admin/orderlist">Manage Orders</Link>
                </li>
                <li>
                    <Link to="/admin/categorylist">Manage Categories</Link>
                </li>
                <li>
                    <Link to="/admin/coupons">Manage Coupons</Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminDashboardPage;
