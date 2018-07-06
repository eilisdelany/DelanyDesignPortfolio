import React, { Component } from "react";
import PropTypes from "prop-types";
import Text from "../Text";
import "../index.scss";

class SlideshowText extends Component {
  render() {
    const { position, title, text, projectId, images, caption } = this.props;
    return (
      <section className={`SlideshowText position position-${position}`}>
        <div className="slideshow">
          <div className={`images images-${images.length - 1} images-${position}`}>
            {images.map(({ src }, index) => {
              return (
                <img
                  key={index}
                  className={`image image-${position}-${index}`}
                  src={`/images/catalogue/${projectId}/${src}.png`}
                  alt={caption}
                />
              );
            })}
          </div>
          <span className="caption">{caption}</span>
        </div>
        <Text title={title} text={text} />
      </section>
    );
  }
}
SlideshowText.propTypes = {
  position: PropTypes.oneOf(["left", "right"]).isRequired,
  title: PropTypes.string.isRequired,
  projectId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  caption: PropTypes.string.isRequired
};

export default SlideshowText;
