import React from "react";
import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { FaSignInAlt, FaUserCheck } from "react-icons/fa";

function Header(props) {
  const { openMenu, userInfo } = props;
  return (
    <>
      <div className="header__brand">
        <button className="header__burger" onClick={openMenu}>
          &#9776;
        </button>
        <Link to="/">
          <span className="biju__brand">B</span>
          ijuPlaza
        </Link>
      </div>
      <div className="header__links">
        <Link to="/cart">
          <GiShoppingCart />
          <sup>Cart</sup>
        </Link>
        {userInfo ? (
          <Link to="/profile">
            <FaUserCheck /> <sup>{userInfo.name.split(" ")[0]}</sup>
          </Link>
        ) : (
          <Link to="/signin">
            <FaSignInAlt />
            <sup>SignIn</sup>
          </Link>
        )}
      </div>
    </>
  );
}

export default Header;
