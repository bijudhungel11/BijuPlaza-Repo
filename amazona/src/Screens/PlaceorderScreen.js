import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import "./CartScreen.css";
import { Link } from "react-router-dom";
import CheckoutWizard from "../components/CheckoutWizard";
import "./PlaceOrderStyle.css";

function PlaceorderScreen(props) {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const { cartItems, shipping, payment } = cart;
  useEffect(() => {}, [props.history]);
  console.log(shipping);
  if (shipping === {}) {
    // window.location.reload(false);

    props.history.push("/shipping");
  }
  if (!payment) {
    // window.location.reload(false);

    props.history.push("/payment");
  }
  //const dispatch = useDispatch();

  const checkOutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemsPrice < 1000 ? 0 : 70;
  const taxPrice = 0.13 * itemsPrice;
  const totalPrice = itemsPrice + shippingPrice + taxPrice;
  /*  const placeOrderHandler = () => {
    // create an order
  }; */
  return (
    <div className="placeorder__container">
      <CheckoutWizard step1 step2 step3 step4 />
      <div className="placeorder">
        <div className="placeorder__info">
          <div>
            <h3>Shipping</h3>

            <pre>
              <h4>Address: {shipping.address}</h4>
              <h4>City: {shipping.city}</h4>
              <h4>Postal:{shipping.postalCode}</h4>
              <h4>Country:{shipping.country}</h4>
            </pre>
          </div>
          <div>
            <h3>Payment</h3>
            <div>Payment Method is done by using: {payment}</div>
            <div>
              <ul className="cart__list-container">
                <li>
                  <h3>Shopping placeorder</h3>
                  <div>price</div>
                </li>
                {/*console.log(placeorderItems)*/}
                {cartItems.length === 0 ? (
                  <div>placeorder is Empty</div>
                ) : (
                  cartItems.map((item, i) => (
                    <li key={i}>
                      <div className="cart__image">
                        <img src={item.image} alt="cart-1" />
                      </div>

                      <div className="cart__name">
                        <div>
                          <Link to={"/product/" + item.product}>
                            {item.name}
                          </Link>
                          {/*console.log(item.product)*/}
                        </div>
                        <div>
                          Qty:
                          {item.qty}
                        </div>
                      </div>

                      <div className="cart__price">{item.price}</div>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="placeorder__action">
          <ul>
            <li>
              <button
                onClick={checkOutHandler}
                className="button primary full-width"
              >
                Place Order
              </button>
            </li>
            <li>
              <h3>Order Summary</h3>
            </li>
            <li>
              <div>Items</div>
              <div>NRS {itemsPrice}</div>
            </li>
            <li>
              <div>Shipping</div>
              <div>NRS {shippingPrice}</div>
            </li>
            <li>
              <div>Tax</div>
              <div>NRS {taxPrice.toFixed(3)}</div>
            </li>

            <li>
              <div>Order Total</div>
              <div>NRS {totalPrice}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PlaceorderScreen;
