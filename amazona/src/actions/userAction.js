import axios from "axios";
import Cookie from "js-cookie";
import {
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_LOGOUT,
} from "../constants/userConstants";
/* for signIn pages */
const signIn = (email, password) => async (dispatch) => {
  dispatch({
    type: USER_SIGNIN_REQUEST,
    payload: { email, password },
  });
  try {
    const { data } = await axios.post("/api/users/signin", { email, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    /* by using the below code if the user close the webpages and again open websites then his data will be saved or logined  */
    Cookie.set("userInfo", JSON.stringify(data));
    /* console.log(JSON.stringify());
    console.log(Cookie.set("userInfo", JSON.stringify(data))); */
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: "Invalid User and Password" });
  }
};

/* register */
const register = (name, email, password) => async (dispatch) => {
  dispatch({
    type: USER_REGISTER_REQUEST,
    payload: { name, email, password },
  });
  try {
    const { data } = await axios.post("/api/users/register", {
      name,
      email,
      password,
    });

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    /* by using the below code if the user close the webpages and again open websites then his data will be saved or logined  */
    // Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
  }
};

/* FOR UPDATING THE USER FOR PROFILE PAGES */
const update = ({ userId, name, email, password }) => async (
  dispatch,
  getState
) => {
  const {
    userSignin: { userInfo },
  } = getState();
  dispatch({
    type: USER_UPDATE_REQUEST,
    payload: { userId, name, email, password },
  });
  try {
    console.log(userId);
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(userInfo.token);
    const { data } = await axios.put(
      "/api/users/" + userId,
      { name, email, password },
      {
        headers: {
          Authorization: "Bearer" + userInfo.token,
        },
      }
    );
    console.log(data);
    dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_UPDATE_FAIL, payload: error.message });
  }
};

/* for log out  */
const logOut = () => (dispatch) => {
  Cookie.remove("userInfo");
  dispatch({ type: USER_LOGOUT });
};
export { signIn, register, update, logOut };
