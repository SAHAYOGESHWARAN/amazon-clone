import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer } from './reducers/productReducers';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';
import { orderCreateReducer } from './reducers/orderReducers';
import { categoryListReducer } from './reducers/categoryReducers';
import { wishlistReducer } from './reducers/wishlistReducers';

// Combine all the reducers into a root reducer
const rootReducer = combineReducers({
    productList: productListReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    categoryList: categoryListReducer,
    wishlist: wishlistReducer,
});

// Load user info from local storage if it exists
const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

// Initial state for the store
const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
};

// Middleware to be used
const middleware = [thunk];

// Create the Redux store with middleware and DevTools support
const store = createStore(
    rootReducer, // Combined reducer
    initialState, // Initial state
    composeWithDevTools(applyMiddleware(...middleware)) // Apply middleware and DevTools
);

export default store;
