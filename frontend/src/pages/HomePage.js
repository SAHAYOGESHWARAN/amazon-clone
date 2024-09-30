import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products');
            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Latest Products</h1>
            <div className="products">
                {products.map((product) => (
                    <Product key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
