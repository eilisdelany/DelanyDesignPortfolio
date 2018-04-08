import React, { Component } from "react";
import PropTypes from "prop-types";
import "../index.scss";

class FibonacciComponent extends Component {
  constructor() {
    super();
    this.state = {
      isHovering: false
    };
  }

  setHoverState = () => {
    this.setState({ isHovering: true });
  };

  unsetHoverState = () => {
    this.setState({ isHovering: false });
  };

  render() {
    const { name, title, description } = this.props;
    return (
      <div
        className={`FibonacciComponent ${name}`}
        onMouseEnter={this.setHoverState}
        onMouseLeave={this.unsetHoverState}
      >
        <div>
          <span className="title">{title}</span>
          {(this.state.isHovering && description) &&
            <span className="description">{description}</span>}
        </div>
      </div>
    );
  }
}

FibonacciComponent.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default FibonacciComponent;
