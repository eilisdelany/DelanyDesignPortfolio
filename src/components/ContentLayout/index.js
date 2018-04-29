import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.scss";

class ContentLayout extends Component {
  render() {
    const { subtitle, content } = this.props;
    return (
      <div className="ContentLayout">
        <div className="ContentLayout-subtitle-col">
          {`-- ${subtitle}`}
        </div>
        <div className="ContentLayout-content-col">
          {content.map((item, index) => {
            return (
              <div key={index} className="ContentLayout-row">{item}</div>
            );
        })}
        </div>
      </div>
    );
  }
}

ContentLayout.propTypes = {
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired
};
export default ContentLayout;
