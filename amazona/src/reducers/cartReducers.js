import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING,
  CART_SAVE_PAYMENT,
  /*  CART_SAVE_PLACEORDER, */
} from "../constants/productConstants";

function cartReducers(
  state = {
    cartItems: [],
    shipping: {},
    payment: {},
  },
  action
) {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      // console.log(item);
      const product = state.cartItems.find((x) => x.product === item.product);
      // console.log(product);
      if (product) {
        return {
          cartItems: state.cartItems.map((x) =>
            x.product === product.product ? item : x
          ),
        };
      }
      return { ...state, cartItems: [...state.cartItems, item] };
    case CART_REMOVE_ITEM: {
      return {
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    }
    case CART_SAVE_SHIPPING: {
      return {
        ...state,
        shipping: action.payload,
      };
    }
    case CART_SAVE_PAYMENT: {
      return {
        ...state,
        payment: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export default cartReducers;
