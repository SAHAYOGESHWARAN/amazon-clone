import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    return (
        <div className="product">
            <Link to={`/product/${product._id}`}>
                <img src={product.imageUrl} alt={product.name} />
                <h2>{product.name}</h2>
                <p>${product.price}</p>
            </Link>
        </div>
    );
};

export default Product;
