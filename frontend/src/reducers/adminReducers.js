import { ADMIN_ANALYTICS_SUCCESS, ADMIN_ANALYTICS_FAIL } from '../constants/adminConstants';

export const analyticsReducer = (state = { data: {} }, action) => {
    switch (action.type) {
        case ADMIN_ANALYTICS_SUCCESS:
            return { loading: false, data: action.payload };
        case ADMIN_ANALYTICS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
