import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.scss";

class Tags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="Tags">
        {tags.map((tag, index) => {
          return (
            <section className="Tag">
              <span>{tag}</span>
              {(index < tags.length - 1) && <img src={'/images/dot.png'} alt="dot" className="dot" />}
            </section>
          );
        })}
      </div>
    );
  }
}
Tags.propTypes = {
  tags: PropTypes.array.isRequired
};

export default Tags;
