import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeCurrency } from '../actions/currencyActions';

const CurrencySelector = () => {
    const [currency, setCurrency] = useState('USD');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setCurrency(e.target.value);
        dispatch(changeCurrency(e.target.value));
    };

    return (
        <select value={currency} onChange={handleChange}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="INR">INR</option>
        </select>
    );
};

export default CurrencySelector;
