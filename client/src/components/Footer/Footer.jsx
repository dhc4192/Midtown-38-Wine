import React, { Component } from "react";
import { FiPhone } from "react-icons/fi";

import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <p>Midtown 38 Wines, 146W 38th St New York, NY 10018</p>
        <a className="footer-phone-link" href="tel:2123959200">
          <FiPhone /> 212-395-9200
        </a>
        <p>B-Nav 1</p>
        <p>B-Nav 2</p>
        <p>B-Nav 3</p>
        <p>B-Nav 4</p>
      </div>
    );
  }
}
