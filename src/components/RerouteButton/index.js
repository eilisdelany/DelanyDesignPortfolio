import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const RerouteButton = ({ onClick }) => {
  return (
    <button
      className="RerouteButton"
      onClick={onClick}
    />
  )
}

RerouteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RerouteButton;