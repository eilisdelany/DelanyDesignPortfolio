import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class UrlLinksRow extends Component {

  render() {
    const { date, files } = this.props;
    return (
      <div className="UrlLinksRow">
        <div className="UrlLinksRow-date-col" data-test="UrlLinksRow-date">
          {`-- ${date}`}
        </div>
        <div className="UrlLinksRow-links-col">
          {
            files.map(({ text, url }, index) => {
              return (
              <a
                key={index}
                href={url}
                target="_blank"
                className="UrlLinksRow-link"
                data-test="UrlLinksRow-link"
              >
                {text}
              </a>
                
              );
            })
          }
        </div>
      </div>
    );
  }
}

UrlLinksRow.propTypes = {
  date: PropTypes.string.isRequired,
  files: PropTypes.array.isRequired
}
export default UrlLinksRow;
