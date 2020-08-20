import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_SAVE_REQUEST,
  PRODUCT_SAVE_FAIL,
  PRODUCT_SAVE_SUCCESS,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
} from "../constants/productConstants";

function productListReducers(
  state = {
    products: [],
  },
  action
) {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      /* the three main property which are loading error and products are passed in the HomeScreens component where the dispatch is called to execute the actions */
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
function productDetailsReducers(
  state = {
    product: {},
  },
  action
) {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true };

    /* loading , error and product is passed at the productScreen component where  the dispatch is called which means executing the actions defined  */
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

/* product save reducers which call the addProductAction.js for swithing according to the req made by the users . */
function productSaveReducers(
  state = {
    product: {},
  },
  action
) {
  switch (action.type) {
    case PRODUCT_SAVE_REQUEST:
      return { loading: true, products: [] };

    /* loading , error and product is passed at the productScreen component where  the dispatch is called which means executing the actions defined  */
    case PRODUCT_SAVE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_SAVE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function productDeleteReducers(
  state = {
    product: {},
  },
  action
) {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true };

    /* loading , error and product is passed at the productScreen component where  the dispatch is called which means executing the actions defined  */
    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, product: action.payload, success: true };
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export {
  productListReducers,
  productDetailsReducers,
  productSaveReducers,
  productDeleteReducers,
};
