import React, { Component } from "react";
import PropTypes from "prop-types";
import "../index.scss";

class Quote extends Component {
  render() {
    const { position, text, name } = this.props;
    return (
      <section className={`Quote position position-${position}`}>
        <div>
          <span className="text">{`“${text}”`}</span>
          <span className="name">{name}</span>
        </div>
      </section>
    );
  }
}
Quote.propTypes = {
  position: PropTypes.oneOf(["left", "right"]).isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Quote;
