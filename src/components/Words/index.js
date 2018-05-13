import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Tags from "../../components/Tags";
import "./index.scss";

class Words extends Component {
  render() {
    const { title, time, tags, url } = this.props.props;
    return (
      <Fragment>
        <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="Words-link"
        >
          <span className="Words-title">{`${title} [${time}]`}</span>
        </a>
        <Tags tags={tags} />
      </Fragment>
    );
  }
}

Words.propTypes = {
  props: PropTypes.object.isRequired
};

export default Words;
