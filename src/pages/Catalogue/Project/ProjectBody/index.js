import React, { Component } from "react";
import PropTypes from "prop-types";
import types from "../../../../archive/catalogue/types";
import TextImage from "./ProjectComponents/TextImage";
import Quote from "./ProjectComponents/Quote";

class ProjectBody extends Component {
  renderProjectItem(item, projectId) {
    switch (item.type) {
      case types.IMG_TEXT:
        return (
          <TextImage
            position={item.position}
            title={item.title}
            text={item.text}
            image={`${projectId}/${item.image}`}
            caption={item.caption}
          />
        );
      case types.QUOTE:
        return (
          <Quote
            position={item.position}
            text={item.text}
            name={item.name}
          />
        );
      default:
        return null;
    }
  }

  render() {
    const { content, projectId } = this.props;
    return (
      <section>
        {content.map((item, index) => {
          return (
            <div key={index} className="ProjectBody-item">
              {this.renderProjectItem(item, projectId)}
            </div>
          );
        })}
      </section>
    );
  }
}
ProjectBody.propTypes = {
  content: PropTypes.array.isRequired,
  projectId: PropTypes.string.isRequired
};

export default ProjectBody;
