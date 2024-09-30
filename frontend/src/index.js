import React from 'react';
import ReactDOM from 'react-dom';
import App from './APP';
import { Provider } from 'react-redux';
import store from './store';

// Function to load PayPal SDK
const loadPayPalScript = (clientId) => {
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
    script.async = true;
    script.onload = () => {
        console.log('PayPal SDK loaded');
    };
    document.body.appendChild(script);
};

// Load the PayPal SDK
loadPayPalScript('your-paypal-client-id'); // Replace with your actual client ID

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
