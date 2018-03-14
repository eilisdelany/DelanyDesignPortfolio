import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class PageTitle extends Component {

  render() {
    return (
      <div className="PageTitle">
        <span>{this.props.text}</span>
      </div>
    );
  }
}
PageTitle.propTypes = {
  text: PropTypes.string.isRequired
};

export default PageTitle;
