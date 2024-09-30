import axios from 'axios';
import { CATEGORY_LIST_SUCCESS, CATEGORY_LIST_FAIL } from '../constants/categoryConstants';

export const listCategories = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/api/categories');
        dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: CATEGORY_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};
