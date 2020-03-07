import React, { Component } from "react";
import PropTypes from "prop-types";
import "../index.scss";

class ImageVideo extends Component {
  render() {
    const { position, url, image, projectId } = this.props;
    return (
      <section className={`ImageVideo position position-${position}`}>
        <div className="image">
          <img
            src={`/images/catalogue/${projectId}/${image.src}.png`}
            alt={image.caption}
          />
          <span className="caption">{image.caption}</span>
        </div>
        <div className={`video video-${position}`}>
          <iframe
            src={url.src}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="iframe"
            title={url.caption}
          />
          <span className="caption">{url.caption}</span>
        </div>
      </section>
    );
  }
}
ImageVideo.propTypes = {
  position: PropTypes.oneOf(["left", "right"]).isRequired,
  url: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
  projectId: PropTypes.string.isRequired
};

export default ImageVideo;
