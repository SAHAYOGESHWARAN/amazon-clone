import axios from 'axios';
import { COUPON_APPLY_SUCCESS, COUPON_APPLY_FAIL } from '../constants/couponConstants';

export const applyCoupon = (code) => async (dispatch, getState) => {
    try {
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.post('/api/coupons/apply', { code }, config);

        dispatch({
            type: COUPON_APPLY_SUCCESS,
            payload: data,
        });

        return data;
    } catch (error) {
        dispatch({
            type: COUPON_APPLY_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};
