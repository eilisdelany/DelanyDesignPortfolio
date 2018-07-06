import React, { Component } from "react";
import PropTypes from "prop-types";
import "../index.scss";

class Video extends Component {
  render() {
    const { position, url, caption } = this.props;
    return (
      <section className={`Video position position-${position}`}>
        <div>
          <iframe
            src={url}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="iframe"
            title={caption}
          />
          <span className="caption">{caption}</span>
        </div>
      </section>
    );
  }
}
Video.propTypes = {
  position: PropTypes.oneOf(["left", "right"]).isRequired,
  url: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired
};

export default Video;
