import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import SearchBar from '../SearchBar/SearchBar'

export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <SearchBar/>
      </div>
    )
  }
}
