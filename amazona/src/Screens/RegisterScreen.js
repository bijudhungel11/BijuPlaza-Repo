import React, { useEffect, useState } from "react";
import "./ProductScreen.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./SignInScreen.css";
import { register } from "../actions/userAction";

function RegisterScreen(props) {
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  // console.log(userInfo);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  console.log(repassword);
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/signin";
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [userInfo, props.history, redirect]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };
  return (
    <div className="register__screen">
      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form__container">
            <li>
              <h2>Creat Account</h2>
            </li>
            <li>
              {loading && <div>loading....</div>}
              {error && <div>{error}</div>}
            </li>
            <li>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
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
              <label htmlFor="repassword">Re-Enter Password</label>
              <input
                type="password"
                name="repassword"
                id="repassword"
                onChange={(e) => setRePassword(e.target.value)}
              />
            </li>
            <li>
              <button type="submit" className="button primary">
                Register
              </button>
            </li>
            <li className="last__child">
              <h4 className="inline-block">Already have an account?</h4>
              <Link
                to={redirect === "/" ? "signin" : "signin?redirect=" + redirect}
                className="button secondary text-center"
              >
                Sign In
              </Link>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default RegisterScreen;
