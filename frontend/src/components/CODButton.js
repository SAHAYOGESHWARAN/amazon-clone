import React from 'react';

const CODButton = ({ onSuccess }) => {
    const handleCOD = () => {
        // Simulate a successful COD transaction
        onSuccess();
    };

    return (
        <button className="btn btn-success" onClick={handleCOD}>
            Pay with Cash on Delivery
        </button>
    );
};

export default CODButton;
