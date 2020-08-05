import React, { Component } from "react";
import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";
import Footer from "../Footer/Footer";
import HomePageItems from "../HomePageItems/HomePageItems";
import Wines from "../Wines/Wines";
import Spirits from "../Spirits/Spirits";
import Sakes from "../Sakes/Sakes";
import Koshers from "../Koshers/Koshers";
import News from "../News/News";
import Contact from "../Contact/Contact";
import { Route } from "react-router-dom";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <SearchBar />
        <Filter />
        <Route exact path="/" render={() => <HomePageItems />} />
        <Route exact path="/wine" render={() => <Wines />} />
        <Route exact path="/spirit" render={() => <Spirits />} />
        <Route exact path="/sake" render={() => <Sakes />} />
        <Route exact path="/kosher" render={() => <Koshers />} />
        <Route exact path="/news" render={() => <News />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Footer />
      </div>
    );
  }
}
