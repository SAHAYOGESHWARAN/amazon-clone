import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // CSS for styling

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/orders">Orders</Link></li>
            </ul>
        </aside>
    );
};

export default Sidebar;
