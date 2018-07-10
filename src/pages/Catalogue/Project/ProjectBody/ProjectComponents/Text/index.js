import React, { Component } from "react";
import PropTypes from "prop-types";
import "../index.scss";

const BulletPointList = ({ list }) => {
  return (
    <ul className="BulletPointList">
      {list.map((listItem, index) => {
        return <li key={index}>{listItem}</li>;
      })}
    </ul>
  );
};

class Text extends Component {
  render() {
    const { title, text } = this.props;
    return (
      <div className="Text">
        <h4 className="title">{`- ${title}`}</h4>

        <span className="text">
          {text instanceof Object
            ? Object.keys(text).map((key, index) => {
                if (key === "text") {
                  return <p key={index}>{text[key]}</p>;
                } else if (key === "list") {
                  return <BulletPointList key={index} list={text[key]} />;
                }
                return null;
              })
            : text}
        </span>
      </div>
    );
  }
}
Text.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.oneOfType(PropTypes.string, PropTypes.object).isRequired
};

export default Text;
