import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer } from './reducers/productReducers';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';
import { orderCreateReducer } from './reducers/orderReducers'; // Order reducer
import { categoryListReducer } from './reducers/categoryReducers';
import { wishlistReducer } from './reducers/wishlistReducers';
const reducer = combineReducers({
    productList: productListReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer, 
    categoryList: categoryListReducer,
    wishlist: wishlistReducer, // Include order reducer
});

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
