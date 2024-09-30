import {
    WISHLIST_ADD_ITEM,
    WISHLIST_REMOVE_ITEM,
    WISHLIST_GET_ITEMS,
} from '../constants/wishlistConstants';

export const wishlistReducer = (state = { wishlistItems: [] }, action) => {
    switch (action.type) {
        case WISHLIST_ADD_ITEM:
            return { ...state, wishlistItems: [...state.wishlistItems, action.payload] };
        case WISHLIST_GET_ITEMS:
            return { ...state, wishlistItems: action.payload };
        case WISHLIST_REMOVE_ITEM:
            return {
                ...state,
                wishlistItems: state.wishlistItems.filter(
                    (item) => item._id !== action.payload
                ),
            };
        default:
            return state;
    }
};
