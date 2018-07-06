import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.scss";

class Slideshow extends Component {
  constructor() {
    super();
    this.state = {
      imagePosition: 0
    };
  }

  changeImagePosition = imagePosition => {
    this.setState({ imagePosition });
  };

  renderImage = (className, index) => {
    const { images, projectId } = this.props;
    const { src, caption } = images[index];
    return (
      <div className={`image ${className}`}>
        <img src={`/images/catalogue/${projectId}/${src}.png`} alt={caption} />
        <span className="caption">{caption}</span>
      </div>
    );
  };

  render() {
    const { images } = this.props;
    const { imagePosition } = this.state;
    return (
      <div className="Slideshow">
        <div className="Slideshow-content">
          <div className="Slideshow-images">
            {this.renderImage(
              "image-prev",
              imagePosition === 0 ? images.length - 1 : imagePosition - 1
            )}
            {this.renderImage("image-current", imagePosition)}
            {this.renderImage(
              "image-next",
              imagePosition === images.length - 1 ? 0 : imagePosition + 1
            )}
          </div>
          <div className="Slideshow-navigator">
            <button>prev</button>
            {images.map((image, index) => {
              return (
                <div
                  className={`position-indicator ${index === imagePosition &&
                    "active"}`}
                />
              );
            })}
            <button>next</button>
          </div>
        </div>
      </div>
    );
  }
}
Slideshow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  projectId: PropTypes.string.isRequired,
  hideSlideshow: PropTypes.func.isRequired
};

export default Slideshow;
