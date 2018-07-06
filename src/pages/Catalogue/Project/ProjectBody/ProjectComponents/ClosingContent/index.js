import React, { Component } from "react";
import PropTypes from "prop-types";
import Text from "../Text";
import "../index.scss";

class ClosingContent extends Component {
  render() {
    const { position, title, text, image, caption, feedback } = this.props;
    return (
      <section className={`ClosingContent position position-${position}`}>
        <div className="image">
          <img src={`/images/catalogue/${image}.png`} alt={caption} />
          <span className="caption">{caption}</span>
        </div>
        <div className="Texts-section">
          <Text title={title} text={text} />
          <Text
            title="Feedback"
            text={feedback
              .map(quote => {
                return `“${quote.text}”\n${quote.name}`;
              })
              .join("\n\n")}
          />
        </div>
      </section>
    );
  }
}
ClosingContent.propTypes = {
  position: PropTypes.oneOf(["left", "right"]).isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  feedback: PropTypes.array.isRequired
};

export default ClosingContent;
