import React, { Component } from "react";
import "./index.scss";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer-content">
        <span>{"Design by Eilís"}</span>
        <a
          href="https://www.linkedin.com/in/eibhlin-mcgeady-90735a95/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"Code by Eibhlín"}
        </a>
        </div>
      </div>
    );
  }
}
export default Footer;
