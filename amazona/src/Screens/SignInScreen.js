import React, { useEffect, useState } from "react";
import "./ProductScreen.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./SignInScreen.css";
import { signIn } from "../actions/userAction";

function SignInScreen(props) {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* these will make the user to go the shipping if he/she is login if not then it will redirect to the signin pages which is awesome */
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  useEffect(() => {
    if (userInfo) {
      //console.table(userInfo);
      //console.log(userInfo.isAdmin);
      props.history.push(redirect);
    }
  }, [userInfo, redirect, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signIn(email, password));
  };
  return (
    <div className="signin__screen">
      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form__container">
            <li>
              <h2>Sign-In</h2>
            </li>
            <li>
              {loading && <div>loading....</div>}
              {error && <div className="error__message">{error}</div>}
            </li>
            <li>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </li>
            <li>
              <button type="submit" className="button success">
                SignIn
              </button>
            </li>
            <li>New to BijuPlaza?</li>
            <li>
              <Link
                to={
                  redirect === "/"
                    ? "register"
                    : "register?redirect=" + redirect
                }
                className="button secondary text-center"
              >
                Create your BijuPlaza Account
              </Link>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default SignInScreen;
