import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Tags from "../../components/Tags";
import "./index.scss";

class Words extends Component {
  render() {
    const { title, time, tags, content } = this.props.props;
    return (
      <Fragment>
        <Link
          to={{
            pathname: '/words/blog',
            state: { title, content, tags }
          }}
          className="Words-link"
        >
          <span className="Words-title">{`${title} [${time}]`}</span>
        </Link>
        <Tags tags={tags} />
      </Fragment>
    );
  }
}

Words.propTypes = {
  props: PropTypes.object.isRequired
};

export default Words;
