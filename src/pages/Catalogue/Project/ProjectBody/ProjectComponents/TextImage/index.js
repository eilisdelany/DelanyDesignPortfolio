import React, { Component } from "react";
import PropTypes from "prop-types";
import "../index.scss";

class TextImage extends Component {
  render() {
    const { position, title, text, image, caption } = this.props;
    return (
      <section className={`TextImage position position-${position}`}>
        <div className="image">
          <img src={`/images/catalogue/${image}.png`} alt={caption} />
          <span className="caption">{caption}</span>
        </div>
        <div className="content">
          <h4 className="title">{`- ${title}`}</h4>
          <span className="text">{text}</span>
        </div>
      </section>
    );
  }
}
TextImage.propTypes = {
  position: PropTypes.oneOf(["left", "right"]).isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired
};

export default TextImage;
