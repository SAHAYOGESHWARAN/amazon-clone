import axios from 'axios';
import {
    WISHLIST_ADD_ITEM,
    WISHLIST_REMOVE_ITEM,
    WISHLIST_GET_ITEMS,
} from '../constants/wishlistConstants';

export const addToWishlist = (productId) => async (dispatch, getState) => {
    const {
        userLogin: { userInfo },
    } = getState();

    const config = {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
        },
    };

    const { data } = await axios.post('/api/wishlist', { productId }, config);

    dispatch({
        type: WISHLIST_ADD_ITEM,
        payload: data,
    });
};

export const getUserWishlist = () => async (dispatch, getState) => {
    const {
        userLogin: { userInfo },
    } = getState();

    const config = {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
        },
    };

    const { data } = await axios.get('/api/wishlist', config);

    dispatch({
        type: WISHLIST_GET_ITEMS,
        payload: data,
    });
};

export const removeFromWishlist = (id) => async (dispatch, getState) => {
    const {
        userLogin: { userInfo },
    } = getState();

    const config = {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
        },
    };

    await axios.delete(`/api/wishlist/${id}`, config);

    dispatch({
        type: WISHLIST_REMOVE_ITEM,
        payload: id,
    });
};
