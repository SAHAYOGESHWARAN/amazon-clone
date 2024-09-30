import axios from 'axios';
import { ADMIN_ANALYTICS_SUCCESS, ADMIN_ANALYTICS_FAIL } from '../constants/adminConstants';

export const fetchAnalyticsData = () => async (dispatch, getState) => {
    try {
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get('/api/admin/analytics', config);

        dispatch({
            type: ADMIN_ANALYTICS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ADMIN_ANALYTICS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};
