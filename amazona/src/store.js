import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import {
  productListReducers,
  productDetailsReducers,
  productSaveReducers,
  productDeleteReducers,
} from "./reducers/productReducers";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
import cartReducers from "./reducers/cartReducers";
import {
  userSigninReducers,
  userRegisterReducers,
  userUpdateReducers,
} from "./reducers/userReducers";
const cartItems = Cookie.getJSON("cartItems") || [];
/* : JSON.parse(localStorage.getItem("cartItems") || []), */
const userInfo = Cookie.getJSON("userInfo") || false;
// this would help in to grab the data from the cookies
const initialState = {
  cart: {
    cartItems,
    shipping: {},
    payment: "",
  },
  userSignin: { userInfo },
};
//console.log(cartItems);
//console.log(initialState);/* it provides the array of the cartItems */

/* all value goes in the state  */
const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducers,
  cart: cartReducers,
  userSignin: userSigninReducers,
  userRegister: userRegisterReducers,
  userUpdate: userUpdateReducers,
  productSave: productSaveReducers,
  productDelete: productDeleteReducers,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
/* thunk is the middleware for the redux and it is used to allow us to use the async operations in the action in the redux*/
export default store;
