export const convertPrice = (price, currency) => {
    const rates = {
        USD: 1,
        EUR: 0.85,
        GBP: 0.75,
        INR: 73.5,
    };

    return (price * rates[currency]).toFixed(2);
};
