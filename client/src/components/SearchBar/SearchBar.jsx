import React, { Component } from "react";
import SearchIcon from "../Assets/search-icon.png";

import "./SearchBar.css";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar-container">
        <img className="search-icon" src={SearchIcon} alt="Search icon" />
        <input className="search-bar" placeholder="Search" type="text" />
      </div>
    );
  }
}
