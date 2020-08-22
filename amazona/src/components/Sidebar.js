import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaShippingFast,
  FaUserAlt,
  FaProductHunt,
} from "react-icons/fa";
import { GiArmoredPants, GiRunningShoe } from "react-icons/gi";
import { TiShoppingCart } from "react-icons/ti";

import { RiShirtLine } from "react-icons/ri";
function Sidebar(props) {
  const { closeMenu, isAdmin } = props;
  return (
    <div className="sidebar__container">
      <div className="sidebar__header">
        <h2>Shopping Categories</h2>
        <button onClick={closeMenu} className="btn-close">
          X
        </button>
      </div>
      <div className="sidebar__scroll">
        <ul className="sidebar__list">
          <li className="sidebar__list--item">
            <Link to="/" className="sidebar__list--link">
              <FaHome /> HomePage
            </Link>
          </li>
          <li className="sidebar__list--item">
            {/*  <a className="sidebar__list--link" href="index.html">
                Shirts
              </a> */}

            <Link to="/shirts" className="sidebar__list--link">
              <RiShirtLine /> Shirts
            </Link>
          </li>
          <li className="sidebar__list--item">
            <Link to="/pants" className="sidebar__list--link">
              <GiArmoredPants /> Pants
            </Link>
          </li>
          <li className="sidebar__list--item">
            <Link to="/shoes" className="sidebar__list--link">
              <GiRunningShoe /> Shoes
            </Link>
          </li>
          <li className="sidebar__list--item">
            <Link to="/cart" className="sidebar__list--link">
              <TiShoppingCart /> Cart
            </Link>
          </li>
          <li className="sidebar__list--item">
            <Link to="/profile" className="sidebar__list--link">
              <FaUserAlt /> Profile
            </Link>
          </li>
          {isAdmin ? (
            <li className="sidebar__list--item">
              <Link to="/products" className="sidebar__list--link">
                <FaProductHunt /> Products
              </Link>
            </li>
          ) : (
            <></>
          )}

          <li className="sidebar__list--item">
            <Link to="/shipping" className="sidebar__list--link">
              <FaShippingFast /> Shipping
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar__footer">
        <h2 className="sidebar__footer--topic">Welcome to the BijuPlaza</h2>
      </div>
    </div>
  );
}

export default Sidebar;
