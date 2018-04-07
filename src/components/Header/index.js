import React, { Component } from "react";
import HeaderTab from "./HeaderTab";
import { pages, pageKeys } from "../../constants/pages";
import "./index.scss";

class Header extends Component {
  render() {
    const activePath = this.props.location.pathname;
    return (
      <div className="Header">
        <img
          className="Header-logo"
          alt="eyelash logo"
          src="/images/logo.png"
        />
        <div className="Header-tabs">
          {pageKeys.map((pageKey, index) => {
            const { path, title } = pages[pageKey];
            return (
              <HeaderTab
                key={index}
                path={path}
                title={title}
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
