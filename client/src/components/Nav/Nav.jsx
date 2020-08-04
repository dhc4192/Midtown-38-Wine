import React, { Component } from "react";
import Logo from "../Assets/38WinesStore.jpeg";
import AccountIcon from "../Assets/account-icon.png";
import CartIcon from "../Assets/cart-icon.png";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <div className="main-nav-container">
        <div className="nav1-container">
          <Link to="/">
            <img className="logo-img" src={Logo} alt="Midtown 38 Wines logo" />
          </Link>
          <h1>NYC FREE 1 HOUR DELIVERY</h1>
          <div>
            <img src={AccountIcon} alt="My account icon" />
            <p>MY ACCOUNT</p>
          </div>
          <div>
            <img src={CartIcon} alt="Shopping cart icon" />
            <p>SHOPPING CART</p>
          </div>
        </div>

        <div className="nav2-container">
          <ul className="nav-selectors">
            <NavLink className='nav-link' activeClassName="active" to="/wine">
              <li className="nav-list">WINES</li>
            </NavLink>
            <NavLink className='nav-link' activeClassName="active" to="/spirit">
              <li className="nav-list">SPIRITS</li>
            </NavLink>
            <NavLink className='nav-link' activeClassName="active" to="/sake">
              <li className="nav-list">SAKE</li>
            </NavLink>
            <NavLink className='nav-link' activeClassName="active" to="/kosher">
              <li className="nav-list">KOSHER</li>
            </NavLink>
            <NavLink className='nav-link' activeClassName="active" to="/news">
              <li className="nav-list">NEWS</li>
            </NavLink>
            <NavLink className='nav-link' activeClassName="active" to="/contact">
              <li className="nav-list">CONTACT US</li>
            </NavLink>
          </ul>
        </div>
      </div>
    );
  }
}
