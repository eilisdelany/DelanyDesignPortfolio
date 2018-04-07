import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "../index.scss";

class HeaderTab extends Component {
  constructor() {
    super();
    this.state = {
      isOnHover: false
    };
  }

  toggleHoverState = () => {
    this.setState(prevState => ({
      isOnHover: !prevState.isOnHover
    }));
  };

  render() {
    const { path, title, isActivePath } = this.props;
    return (
      <div
        className={`HeaderTab ${isActivePath ? "active-tab" : "inactive-tab"}`}
        data-test="Header-tab"
        onMouseEnter={this.toggleHoverState}
        onMouseLeave={this.toggleHoverState}
      >
        <NavLink to={path}>{title}</NavLink>
        {(this.state.isOnHover || isActivePath) && (
          <div className="tab-border">
            <img src={`/images/header/dot.png`} className="dot" alt="dot" />
            <img src={`/images/header/line.png`} className="line" alt="line" />
          </div>
        )}
      </div>
    );
  }
}

HeaderTab.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isActivePath: PropTypes.bool.isRequired
};

export default HeaderTab;
