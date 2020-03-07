import React, { Component } from "react";
import PropTypes from "prop-types";
import Tags from "../../../../components/Tags";
import "../../index.scss";

class ProjectHeader extends Component {
  render() {
    const { title, image, labels, when } = this.props;
    return (
      <section className="ProjectHeader">
        <img src={`/images/catalogue/${image}.png`} alt={title} />
        <div className="ProjectHeader-description">
          <span className="ProjectHeader-labels">
            {"- "}
            <Tags tags={labels} />
          </span>
          <div className="title">{title}</div>
          <Tags tags={when} />
        </div>
      </section>
    );
  }
}

ProjectHeader.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  when: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ProjectHeader;
