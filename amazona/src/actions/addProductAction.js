import {
  PRODUCT_SAVE_REQUEST,
  PRODUCT_SAVE_SUCCESS,
  PRODUCT_SAVE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
} from "../constants/productConstants";
import axios from "axios";

const saveProduct = (product) => async (dispatch, getState) => {
  try {
    // console.log(product);
    dispatch({
      type: PRODUCT_SAVE_REQUEST,
      payload: product,
    });
    const {
      userSignin: { userInfo },
    } = getState();
    if (!product._id) {
      const { data } = await axios.post("/api/products", product, {
        headers: {
          Authorization: "Bearer" + userInfo.token,
        },
      });
      dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
    } else {
      // console.log(product._id);
      const { data } = await axios.put(
        "/api/products/" + product._id,
        product,
        {
          headers: {
            authorization: "Bearer" + userInfo.token,
          },
        }
      );
      dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
    }
    //console.log(data);
  } catch (error) {
    dispatch({ type: PRODUCT_SAVE_FAIL, payload: "hello how are you my bug" });
  }
};

/* The actions is defined for deleting the products from the list */
const deleteProduct = (productId) => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    // console.log(getState().userSignin);
    dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
    // console.log(productId);
    // console.log(userInfo.token);
    const { data } = await axios.delete("/api/products/" + productId, {
      headers: {
        authorization: "Bearer" + userInfo.token,
      },
    });
    /* // console.log(
      "Daata from the add product action which will called when button is clicked",
      data
    ); */

    //console.log(typeof productId);
    // console.log(productId - 1);
    //console.log(dataValue);
    dispatch({
      type: PRODUCT_DELETE_SUCCESS,
      payload: data,
      success: true,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload: error.message,
    });
  }
};

export { saveProduct, deleteProduct };
/* here the actions are definded which will called whenever the dispatch is called 
if the root is not perfectly define or if the we are not getting the data as we want then we can just twik and add some tecnique.


==>it is the simple technique we have to pass the number instead of string that is parseInt(props.match.params.id) which will convert the string into number and it should be pass as the parameter in dispatch where we are calling the detailsProduct(parseInt(props.match.params.id)).

==>the parameter is assign to the productId which will have the number where the user has clicked to the see the details of that products. 

==> instead of getting specific data from the server which was seems to get difficult due some problems we have to get the whole data from the server.

==> data from the server is in the form of array of objects.

==>and const{data}= await axios.get("/api/products/"); returns the whole objects

==>to get the specific object in the specific index in which the user is hoping to get as get by the productId which was already mentioned above
(but remember that array index starts from the 0 and the productId from so get the proper data we have used 

productId-1 gives the actual result we are hoping.)

==> while calling the dispatch we are passing the object whichs are return as the action properties and when action.type=== PRODUCT_DETAILS_SUCCESS is true then payload or data is shown because we have define 

payload: data[product-1]// which will pass the exact data we are hoping.


????but if we want only one objects instead of whole array of objects then these method is use

simply the productId is assign the changed data type of props.match.params.id to number

==>get the exact data from the serverr 
const {data}= await axios.get("/api/products/"+productId);
intead of passing the data[productId -1 ] to payload we can simply pass data


and look the notes on the server.js


*/
