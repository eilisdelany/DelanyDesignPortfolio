import React, { Component } from "react";
import PropTypes from "prop-types";
import "../index.scss";

class Text extends Component {
  render() {
    const { title, text } = this.props;
    return (
      <div className="Text">
        <h4 className="title">{`- ${title}`}</h4>
        <span className="text">{text}</span>
      </div>
    );
  }
}
Text.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Text;
