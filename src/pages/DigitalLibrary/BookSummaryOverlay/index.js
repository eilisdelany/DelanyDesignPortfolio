import React, { Component } from "react";
import PropTypes from "prop-types";
import Tags from "../../../components/Tags";

class BookSummaryOverlay extends Component {
  render() {
    const { id, name, author, summary, tags, close } = this.props;
    return (
      <div className="BookSummaryOverlay">
        <div className="BookSummaryOverlay-description">
          <h4>{name}</h4>
          <h4>{author}</h4>
          <Tags tags={tags} bold={true} />
          <p>{summary}</p>
        </div>
        <img
          className="BookSummaryOverlay-img"
          src={`/images/hit-list/${id}.png`}
          alt={name}
        />
      </div>
    );
  }
}

BookSummaryOverlay.propTypes = {
  id: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default BookSummaryOverlay;
