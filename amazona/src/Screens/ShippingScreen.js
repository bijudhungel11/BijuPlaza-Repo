import React, { useState } from "react";
import "./ProductScreen.css";
import { useDispatch } from "react-redux";
import "./SignInScreen.css";
import { saveShipping } from "../actions/cartAction";
import CheckoutWizard from "../components/CheckoutWizard";
import { FaShippingFast } from "react-icons/fa";

function ShippingScreen(props) {
  const dispatch = useDispatch();

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ address, city, postalCode, country }));
    props.history.push("/payment");
  };
  return (
    <div>
      <CheckoutWizard step1 step2 />
      <div className="register__screen">
        <div className="form">
          <form onSubmit={submitHandler}>
            <ul className="form__container">
              <li>
                <h2 className="form__container--logo">
                  <FaShippingFast />
                </h2>
                <h2 className="form__container--heading">Shipping Screen</h2>
              </li>

              <li>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </li>

              <li>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  onChange={(e) => setCity(e.target.value)}
                />
              </li>

              <li>
                <label htmlFor="postalCode">Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  id="postalCode"
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </li>

              <li>
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  onChange={(e) => setCountry(e.target.value)}
                />
              </li>

              <li>
                <button type="submit" className="button primary">
                  Continue
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ShippingScreen;
