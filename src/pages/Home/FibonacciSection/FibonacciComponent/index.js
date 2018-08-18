import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
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

  selectComponent = () => {
    const { selectComponent, name } = this.props;
    selectComponent(name);
  };

  render() {
    const { name, title, description } = this.props;
    return (
      <NavLink
        className={`FibonacciComponent ${name}`}
        onMouseEnter={this.setHoverState}
        onMouseLeave={this.unsetHoverState}
        to={`/${name}`}
      >
        <div className="container">
          <span className="title">{title}</span>
          <div className="border-bottom">
            <div className="dot" />
            <div className={`line line-${name}`} />
          </div>
          {this.state.isHovering &&
            description && <span className="description">{description}</span>}
        </div>
      </NavLink>
    );
  }
}

FibonacciComponent.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default FibonacciComponent;
