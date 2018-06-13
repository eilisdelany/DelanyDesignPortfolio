import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./index.scss";

const RerouteButton = ({ pathname, scrollToComponent }) => {
  return (
    <Link
      className="RerouteButton"
      to={{ pathname, state: { scrollToComponent } }}
    />
  )
}

RerouteButton.propTypes = {
  pathname: PropTypes.string.isRequired,
  scrollToComponent: PropTypes.bool,
};

export default RerouteButton;