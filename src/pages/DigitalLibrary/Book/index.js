import React, { Component } from "react";
import PropTypes from "prop-types";
import Plx from "react-plx";
import "../index.scss";
import data from "../../../constants/parallaxData";

class Book extends Component {
  render() {
    const { name, className } = this.props;
    return (
      <Plx className={className} parallaxData={data[name]}>
        <img
          src={`/images/books/${name}.jpg`}
          alt={name}
        />
      </Plx>
    );
  }
}
Book.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};
export default Book;
