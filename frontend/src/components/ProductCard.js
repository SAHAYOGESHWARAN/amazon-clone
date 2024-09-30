import React from 'react';
import { useSelector } from 'react-redux';
import { convertPrice } from '../utils/currencyConverter';

const ProductCard = ({ product }) => {
    const { currency } = useSelector((state) => state.currency);

    return (
        <div>
            <h3>{product.name}</h3>
            <p>{convertPrice(product.price, currency)} {currency}</p>
        </div>
    );
};

export default ProductCard;
