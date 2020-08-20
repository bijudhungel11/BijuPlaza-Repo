import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import addToCart, { removeFromCart } from "../actions/cartAction";
import "./CartScreen.css";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

function CartScreen(props) {
  const cart = useSelector((state) => state.cart);
  //console.log(cart);

  const { cartItems } = cart;
  // console.log(cartItems);

  const productId = props.match.params.id;
  //console.log("value from the productId", productId);
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  //console.log(props.location.search.split("="));
  // console.log(qty);
  /* dispatching the addToCart reducers. */
  const dispatch = useDispatch();

  /* when the productId, qty or dispatch is changed then it will load the component  */
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [productId, qty, dispatch]);

  /* Delete handler when the user clicked the Delete button that praticular product will be deleted */
  const deleteFromCart = (id) => {
    dispatch(removeFromCart(id));
    props.history.push("/cart");
  };

  /* Change handler when the user changes the quantity of the product */
  const changeHandler = (e, num) => {
    dispatch(addToCart(num, e.target.value));
    console.log(e.target.value);
    props.history.push("/cart");
  };

  /* When user click the proceed the checkout handler */
  const checkOutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };

  return (
    <div className="cart">
      <div className="cart__list">
        <ul className="cart__list-container">
          <li>
            <h3>
              <FaCartPlus />
              <span className="shopping__heading">Shopping Cart</span>
            </h3>
            <div>
              <h3>Price</h3>
            </div>
          </li>
          {/*console.log(cartItems)*/}
          {cartItems.length === 0 ? (
            <div>Cart is Empty</div>
          ) : (
            cartItems.map((item, i) => (
              <li key={i}>
                <div className="cart__image">
                  <img src={item.image} alt="cart-1" />
                </div>

                <div className="cart__name">
                  <div>
                    <Link to={"/product/" + item.product}>{item.name}</Link>
                    {/*console.log(item.product)*/}
                  </div>
                  <div>
                    Qty:
                    <select
                      value={item.qty}
                      onChange={(e) => changeHandler(e, item.product)}
                    >
                      {[...Array(item.countInStock).keys()].map((x, i) => (
                        <option key={i} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      className="button button__delete"
                      onClick={() => deleteFromCart(item.product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>

                <div className="cart__price">{item.price}</div>
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="cart__action">
        <h3>
          SubTotal:(
          {cartItems.reduce((a, c) => parseInt(a) + parseInt(c.qty), 0)})Items
          ==
          {"  "}NRS{"  "}
          {cartItems.reduce(
            (
              a,
              c //console.log(c.price.split(" ")[1] * c.qty)
            ) => a + c.price * c.qty,
            0
          )}
          <sub>Only</sub>
        </h3>
        <button
          onClick={checkOutHandler}
          className="button primary full-width"
          disabled={cartItems.length === 0}
        >
          Proceed To CheckOut
        </button>
      </div>
    </div>
  );
}

export default CartScreen;
