import React, { Component } from "react";
import PropTypes from "prop-types";
import Tags from "../../../components/Tags";

class BookSummaryOverlay extends Component {
  render() {
    const { id, name, author, summary, tags, reference, close } = this.props;
    return (
      <div className="BookSummaryOverlay">
        <img
          className="BookSummaryOverlay-close"
          src="/images/close.svg"
          alt="close"
          onClick={close}
        />
        <div className="BookSummaryOverlay-description">
          <h4>{name}</h4>
          <h4>{author}</h4>
          <Tags tags={tags} bold={true} />
          <p>{summary}</p>
          <p>{`Click `}<a href={reference} target="_blank" rel="noopener noreferrer">{'here'}</a>{' for a little more detail.'}</p>
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
