import axios from 'axios';
import { PRODUCT_RELATED_SUCCESS, PRODUCT_RELATED_FAIL } from '../constants/productConstants';

export const listRelatedProducts = (productId) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/api/products/${productId}/related`);
        dispatch({ type: PRODUCT_RELATED_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: PRODUCT_RELATED_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};
