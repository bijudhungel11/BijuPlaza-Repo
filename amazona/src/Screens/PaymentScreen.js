import React, { useState } from "react";
import "./ProductScreen.css";
import { useDispatch } from "react-redux";
import "./SignInScreen.css";
import { savePayment } from "../actions/cartAction";
import CheckoutWizard from "../components/CheckoutWizard";
import { MdPayment } from "react-icons/md";
function PaymentScreen(props) {
  const dispatch = useDispatch();

  // const stateValue = useSelector((state) => console.log(state.cart));

  const [paymentMethod, setPaymentMethod] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment(paymentMethod));
    props.history.push("/placeorder");
  };
  return (
    <div className="payment__screen--container">
      <CheckoutWizard step1 step2 step3 />
      <div className="register__screen">
        <div className="form">
          <form onSubmit={submitHandler}>
            <ul className="form__container">
              <li>
                <h2 className="form__container--logo">
                  <MdPayment />
                </h2>
                <h2 className="form__container--heading">Payment Method</h2>
              </li>

              <li>
                <div className="form__container--input-1">
                  <input
                    type="radio"
                    className="form__container--radio"
                    name="paymentMethod"
                    id="paymentMethod"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    value="esewa"
                  />
                  <label htmlFor="paymentMethod">
                    <img
                      src="../images/eSewa.png"
                      alt="esewa"
                      className="payment--logo esewa--logo"
                    />
                  </label>
                </div>
              </li>
              <li>
                <div className="form__container--input-2">
                  <input
                    type="radio"
                    className="form__container--radio"
                    name="paymentMethod"
                    id="paymentMethod"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    value="Khalti"
                  />
                  <label htmlFor="paymentMethod">
                    <img
                      src="../images/khalti.png"
                      alt="Khalti"
                      className="payment--logo khalti--logo"
                    />
                  </label>
                </div>
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

export default PaymentScreen;
