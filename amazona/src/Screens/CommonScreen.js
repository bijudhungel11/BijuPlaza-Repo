import React, { useEffect } from "react";

import { Link } from "react-router-dom";

function CommonScreen(props) {
  const { checkArr, topic } = props;
  function scrollToTop() {
    window.scrollTo({
      top: -640,
      behavior: "smooth",
    });
  }
  return (
    <>
      <div className="product__screen--topic">
        <h1>{topic}</h1>
      </div>
      <ul className="products">
        {checkArr.map((product, index) => (
          <li key={index}>
            <div className="product">
              <Link to={`/product/${product._id}`}>
                <img
                  src={product.image}
                  alt={`product${index}`}
                  className="product__image"
                />
              </Link>

              <div className="product__name text-captalize">
                <Link to={`/product/${product._id}`}>{product.name}</Link>
              </div>
              <div className="product__brand">{product.brand}</div>
              <div className="product__price">NRS{product.price}</div>
              <div className="product__rating-reviews">
                <div>Reviews:{product.numReviews}</div>
                <div className="product__rating">Rating: {product.rating}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="scroll__to--top" onClick={scrollToTop}>
        <h2>^</h2>
      </div>
    </>
  );
}
export default CommonScreen;
