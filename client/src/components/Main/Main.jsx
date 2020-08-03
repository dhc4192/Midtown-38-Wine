import React, { Component } from "react";
import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";
import Footer from "../Footer/Footer";
import HomePageItems from "../HomePageItems/HomePageItems";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <SearchBar />
        <Filter />
        <HomePageItems/>
        <Footer />
      </div>
    );
  }
}
