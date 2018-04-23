import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

class ErrorPage extends Component {
  render() {
    return (
      <div className="ErrorPage">
        <h1 className="title">
          {'Oh '}
          <span className="slanted-text">{'snap!'}</span>
        </h1>
        <div className="description">
          {`Looks like we're lost - click `}
          <NavLink to="/">{'here'}</NavLink>
          {' if you want out.'}
        </div>
      </div>
    );
  }
}
export default ErrorPage;