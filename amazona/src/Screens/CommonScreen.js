import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./CommonScreen.css";
function CommonScreen(props) {
  const { checkArr, topic } = props;
  function scrollToTop() {
    window.scrollTo({
      top: -640,
      behavior: "smooth",
    });
  }
  /* to make the mouseEnter and mouseLeave */

  /* to  */
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const [showBtnTop, setShowBtnTop] = useState(false);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.value = "";
  };

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setShowBtnTop(true);
    } else {
      setShowBtnTop(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  const mouseEnterHandle = (e, index) => {
    console.log(index);
    const value = checkArr.find((item) => item._id === index)._id;
    setValue(value);
  };
  const mouseLeaveHandle = (e, index) => {
    console.log(index);
    setValue("");
  };
  const filterItem = checkArr.filter((item) =>
    // we are just filtering the item according the serach value

    /* first of all the name is converted to lowercase because whether the user types lower case or the higher case at the input box then the user will get the item.active
  and includes method simple does that it icludes the search value 
  check whether the search value is there or not if not it will provid the false value if it is matched then it will return the true value and the item which value is matched and which has return the true value then it will return that spacific item */
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filterItem);
  return (
    <>
      <div className="product__screen--topic">
        <form>
          <input
            type="text"
            id="search"
            name="search"
            className="search-box"
            placeholder="Search Items"
            onChange={handleChange}
          />
          <button onClick={handleSubmit} className="btn__submit">
            Search
          </button>
        </form>
      </div>
      <ul className="products">
        {filterItem?.map((product, index) => (
          <li key={index}>
            <div
              className="product"
              onMouseEnter={(e) => mouseEnterHandle(e, product._id)}
              onMouseLeave={(e) => mouseLeaveHandle(e, product._id)}
            >
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
              <div></div>

              <Link to={`/product/${product._id}`} className="link-addToCart">
                <button
                  className={`btn-addToCart ${
                    product._id === value ? `active` : ""
                  }`}
                >
                  Add To cart
                </button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <div
        className={`scroll__to--top ${showBtnTop ? "active" : ""}`}
        onClick={scrollToTop}
      >
        <h2>^</h2>
      </div>
    </>
  );
}
export default CommonScreen;
