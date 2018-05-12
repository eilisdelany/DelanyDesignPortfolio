import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.scss";

class ContentLayoutSubtitleColumn extends Component {
  render() {
    const { subtitle } = this.props;
    return (
      <div className="ContentLayoutSubtitleColumn">
        <span className="ContentLayoutSubtitleColumn-text">
          {`—`}
          <span className="ContentLayoutSubtitleColumn-subtitle">{subtitle}</span>
        </span>
      </div>
    );
  }
}

ContentLayoutSubtitleColumn.propTypes = {
  subtitle: PropTypes.string.isRequired
};

export default ContentLayoutSubtitleColumn;
