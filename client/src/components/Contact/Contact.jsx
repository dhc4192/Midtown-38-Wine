import React, { Component } from "react";
import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Contact Section</h1>
        <div className="contact-map">
          <iframe
            width="400"
            height="300"
            src="https://maps.google.com/maps?q=146W%2038th%20St%20New%20York%2C%20NY%2010018&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    );
  }
}
