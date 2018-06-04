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

  selectComponent = () => {
    const { selectComponent, name } = this.props;
    selectComponent(name);
  }

  render() {
    const { name, title, description } = this.props;
    return (
      <div
        className={`FibonacciComponent ${name}`}
        onMouseEnter={this.setHoverState}
        onMouseLeave={this.unsetHoverState}
        onClick={this.selectComponent}
      >
      <div className="container">
        <span className="title">{title}</span>
          {this.state.isHovering && (
            <div className="border-bottom">
              <div className="dot"/>
              <div className={`line line-${name}`}/>
          </div>
          )}
          {(this.state.isHovering && description) &&
            <span className="description">{description}</span>
          }
        </div>
      </div>
    );
  }
}

FibonacciComponent.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  selectComponent: PropTypes.func.isRequired,
  description: PropTypes.string
};

export default FibonacciComponent;
