import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductScreen.css";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../actions/productListAction";
import { BsFillBackspaceFill } from "react-icons/bs";

function ProductScreen(props) {
  /* props.match.params.id gives the id or the index of those pictures which has been clicked. 
  console.log(props.match.params.id);
  const product = data.products.find((value) => {
    /* it will return those object which id is similar to the props.match.params.id 
    return value._id == props.match.params.id;
  });
  console.log(product);*/

  //const parameter = parseInt(props.match.params.id);
  //console.log(typeof props.match.params.id);
  //console.log(typeof parameter);
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const handleToCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
    console.log(props.history);
  };

  const { product, loading, error } = productDetails;
  // console.log(product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
  }, [dispatch, props.match.params.id]);
  return (
    <div>
      <div className="back-to-home">
        <Link to="/">
          <BsFillBackspaceFill /> Back To Home
        </Link>
      </div>
      {loading ? (
        <div>Loading....</div>
      ) : error ? (
        <div>
          <h1>What the hell is happening</h1>
        </div>
      ) : (
        <div className="product__details">
          <div className="product__details--img">
            <img src={product.image} alt={`product ${product._id}`} />
          </div>
          <div className="product__details--info">
            <ul>
              <li>
                <h2>{product.name}</h2>
              </li>
              <li>{product.rating}</li>
              <li>
                <b>{product.price}</b>
              </li>
              <li>Description:{product.description}</li>
            </ul>
          </div>
          <div className="product__details--action">
            <ul>
              <li>Price: {product.price}</li>
              <li>
                Status: {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
              </li>
              <li>
                Qty:
                <select
                  value={qty}
                  onChange={(e) => {
                    setQty(e.target.value);
                  }}
                >
                  {[...Array(product.countInStock).keys()].map((x, i) => (
                    <option key={i} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </li>
              <li>
                {product.countInStock > 0 && (
                  <button
                    onClick={handleToCart}
                    className="button btn__success"
                  >
                    Add To Cart
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductScreen;
