import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Import CSS for styling

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Admin Dashboard</h1>
            <div className="dashboard-content">
                <h2>Overview</h2>
                <div className="cards">
                    <div className="card">
                        <h3>Total Products</h3>
                        <p>10</p> {/* Replace with actual data */}
                    </div>
                    <div className="card">
                        <h3>Total Users</h3>
                        <p>50</p> {/* Replace with actual data */}
                    </div>
                    <div className="card">
                        <h3>Total Orders</h3>
                        <p>30</p> {/* Replace with actual data */}
                    </div>
                </div>
                <Link to="/products" className="btn">View Products</Link>
                <Link to="/users" className="btn">View Users</Link>
                <Link to="/orders" className="btn">View Orders</Link>
            </div>
        </div>
    );
};

export default Dashboard;
