import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

const PayPalButtonComponent = ({ amount, onSuccess }) => {
    return (
        <PayPalButton
            amount={amount}
            onSuccess={onSuccess}
        />
    );
};

export default PayPalButtonComponent;
