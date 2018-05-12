import React, { Component } from "react";
import HeaderTab from "./HeaderTab";
import { NavLink } from "react-router-dom";
import { pages, pageKeys } from "../../constants/pages";
import "./index.scss";

class Header extends Component {
  render() {
    const activePath = this.props.location.pathname;
    return (
      <div className="Header">
        <NavLink to={pages.ITS_ME.path}>
          <img
            className="Header-logo"
            alt="eyelash logo"
            src="/images/logo.png"
          />
        </NavLink>
        <div className="Header-tabs">
          {pageKeys.map((pageKey, index) => {
            const { path, title } = pages[pageKey];
            return (
              <HeaderTab
                key={index}
                path={path}
                title={title}
                index={index}
                isActivePath={activePath === path}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default Header;
