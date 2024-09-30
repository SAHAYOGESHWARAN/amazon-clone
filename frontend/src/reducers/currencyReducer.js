export const currencyReducer = (state = { currency: 'USD' }, action) => {
    switch (action.type) {
        case 'CHANGE_CURRENCY':
            return { currency: action.payload };
        default:
            return state;
    }
};
