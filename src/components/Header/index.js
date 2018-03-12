import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { pages, pageKeys } from '../../constants/pages';
import './index.scss';

class Header extends Component {
  render() {
    const activePath = this.props.match.path;
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
              <div key={index} className={path === activePath ? "Header-active-tab" : "Header-tab"}>
                <NavLink to={path}>
                  {title}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Header;
