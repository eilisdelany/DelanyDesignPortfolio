import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.scss";

class TopFive extends Component {
  render() {
    const { url, text } = this.props.props;
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="TopFive-link"
      >
        {text}
      </a>
    );
  }
}

TopFive.propTypes = {
  props: PropTypes.object.isRequired,
};

export default TopFive;
