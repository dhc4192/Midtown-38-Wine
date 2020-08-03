import React, { Component } from "react";
import Logo from "../Assets/38WinesStore.jpeg";
import AccountIcon from "../Assets/account-icon.png";
import CartIcon from "../Assets/cart-icon.png";
import {Link} from 'react-router-dom'
import './Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <div className='main-nav-container'>


        <div className='nav1-container'>
          <img className='logo-img' src={Logo} alt="Midtown 38 Wines logo" />
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


        <div className='nav2-container'>
          <ul className='nav-selectors'>
            <li className='nav-list'>WINES</li>
            <li className='nav-list'>SPIRITS</li>
            <li className='nav-list'>SAKE</li>
            <li className='nav-list'>KOSHER</li>
            <li className='nav-list'>NEWS</li>
            <li className='nav-list'>CONTACT US</li>
          </ul>
        </div>
      </div>
    );
  }
}
