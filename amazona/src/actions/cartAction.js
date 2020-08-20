import axios from "axios";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING,
  CART_SAVE_PAYMENT,
  /*  CART_SAVE_PLACEORDER, */
} from "../constants/productConstants";
import Cookie from "js-cookie";

const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/api/products/" + productId);
    //console.log(data);

    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });
    const {
      cart: { cartItems },
    } = getState();
    //localStorage.setItem("cartItems", JSON.stringify(cartItems));
    Cookie.set("cartItems", JSON.stringify(cartItems));
  } catch (error) {
    console.log("what the hell is happening");
  }
};
const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: productId,
  });
  const {
    cart: { cartItems },
  } = getState();
  //localStorage.setItem("cartItems", JSON.stringify(cartItems));
  Cookie.set("cartItems", JSON.stringify(cartItems));
  //console.log(Cookie.set("cartItems", JSON.stringify(cartItems)));
  /* it provides the value of the cartItems which has been deleted */
  // console.table(JSON.stringify(cartItems));
  //console.log(cartItems);
};

const saveShipping = (data) => (dispatch) => {
  console.log(
    "value from saveShipping actions when  I will clicked the continue button of the shipping screens",
    data
  );
  dispatch({ type: CART_SAVE_SHIPPING, payload: data });
};
const savePayment = (data) => (dispatch) => {
  console.log(
    "value from the savePayment actions when I clicked the continue button of the payment screen",
    data
  );
  dispatch({ type: CART_SAVE_PAYMENT, payload: data });
};
// const savePlaceOrder = (data) => (dispatch) => {
//   dispatch({ type: CART_SAVE_PLACEORDER, payload: data });
// };

export { removeFromCart, saveShipping, savePayment };
export default addToCart;
