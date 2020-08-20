import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";
import axios from "axios";

const listProduct = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("/api/products");
    //console.log(data);
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};
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

const detailsProduct = (productId) => async (dispatch) => {
  try {
    console.log(productId);
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
    //console.log(typeof productId);
    const { data } = await axios.get("/api/products/" + productId);
    //console.log(typeof productId);
    // console.log(productId - 1);
    console.log(data);
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.message,
    });
  }
};
export { listProduct, detailsProduct };
