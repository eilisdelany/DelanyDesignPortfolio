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

  showHoverState = () => {
    this.setState({ isOnHover: true });
  };

  hideHoverState = () => {
    this.setState({ isOnHover: false });
  };

  render() {
    const { path, title, index, isActivePath } = this.props;
    return (
      <div
        className={`HeaderTab ${isActivePath ? "active-tab" : "inactive-tab"}`}
        data-test="Header-tab"
        onMouseEnter={this.showHoverState}
        onMouseLeave={this.hideHoverState}
      >
        <NavLink to={path}>{title}</NavLink>
        {(this.state.isOnHover || isActivePath) && (
          <div className="tab-border">
            <img src={`/images/header/dot.png`} className="dot" alt="dot" />
            <img src={`/images/header/line.png`} className={`line line-${index}`} alt="line" />
          </div>
        )}
      </div>
    );
  }
}

HeaderTab.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isActivePath: PropTypes.bool.isRequired
};

export default HeaderTab;
