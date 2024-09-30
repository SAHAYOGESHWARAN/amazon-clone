export const changeCurrency = (currency) => (dispatch) => {
    dispatch({ type: 'CHANGE_CURRENCY', payload: currency });
};
