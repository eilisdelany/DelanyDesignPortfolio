import React, { Component } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "./index.scss";

function Arrow(props) {
  const { type, onClick } = props;
  return <div className={`Arrow Arrow-${type}`} onClick={onClick} />;
}

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
    const { images, projectId, hideSlideshow } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
      centerMode: true,
      slidesToShow: 1,
      focusOnSelect: true,
      nextArrow: <Arrow type="next" />,
      prevArrow: <Arrow type="prev" />
    };
    return (
      <div className="Slideshow">
        <div className="Slideshow-content">
          <button className="Slideshow-back-button" onClick={hideSlideshow} />
          <Slider {...settings}>
            {images.map(({ src, caption }, index) => {
              return (
                <div className="image" key={index}>
                  <img
                    src={`/images/catalogue/${projectId}/${src}.png`}
                    alt={caption}
                  />
                  <span className="caption">{caption}</span>
                </div>
              );
            })}
          </Slider>
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
