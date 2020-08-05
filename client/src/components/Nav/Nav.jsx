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
          <img className="logo-img" src={Logo} alt="Midtown 38 Wines logo" />
          <h1>
            NYC <span className="free">FREE</span> 1 HOUR DELIVERY
          </h1>
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
          <div className="nav-selectors">
            <div class="dropdown">
              <button class="dropbtn">WINES</button>
              <div class="dropdown-content">
                <Link>
                  <li href="#">Link 1</li>
                </Link>
                <Link>
                  <li href="#">Link 2</li>
                </Link>
                <Link>
                  <li href="#">Link 3</li>
                </Link>
              </div>
            </div>
            <Link>
              <li className="nav-list">SPIRITS</li>
            </Link>
            <Link>
              <li className="nav-list">SAKE</li>
            </Link>
            <Link>
              <li className="nav-list">KOSHER</li>
            </Link>
            <Link>
              <li className="nav-list">NEWS</li>
            </Link>
            <Link>
              <li className="nav-list">CONTACT US</li>
            </Link>
          </div>
<!--           <ul className="nav-selectors">
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
          </ul> -->
        </div>
      </div>
    );
  }
}
