import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import './HomePage.css'; // Assuming you have a CSS file for styling

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get('/api/products');
                setProducts(data);
            } catch (err) {
                setError('Failed to load products. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="homepage">
            <h1>Latest Products</h1>
            {loading ? (
                <div className="loading">Loading products...</div>
            ) : error ? (
                <div className="error">{error}</div>
            ) : (
                <div className="products-grid">
                    {products.map((product) => (
                        <Product key={product._id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default HomePage;
