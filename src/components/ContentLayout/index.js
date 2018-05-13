import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.scss";
import ContentLayoutSubtitleColumn from "./ContentLayoutSubtitleColumn";

class ContentLayout extends Component {
  render() {
    const { subtitle, content, highlightOnHover, wide } = this.props;
    return (
      <div
        className={`ContentLayout ${highlightOnHover &&
          "ContentLayout-highlight"}`}
      >
        <ContentLayoutSubtitleColumn subtitle={subtitle} />
        <div className="ContentLayout-content-col">
          {content.map((item, index) => {
            return (
              <div
                key={index}
                className={`ContentLayout-row ${index < content.length - 1 &&
                  `ContentLayout-row-bottom-space${wide ? "-wide" : ""}`}`}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

ContentLayout.propTypes = {
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
  highlightOnHover: PropTypes.bool.isRequired,
  wide: PropTypes.bool.isRequired
};

ContentLayout.defaultProps = {
  highlightOnHover: false,
  wide: false
};

export default ContentLayout;
