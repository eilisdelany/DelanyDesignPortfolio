import React, { Component } from "react";
import PropTypes from "prop-types";

const summary =
  "constant flux and never expands beyond ten books at a given time. \n\nI want this web page to act as a visual diary for those looking for more than bite-sized articles on digital devices.";

class BookSummaryOverlay extends Component {
  render() {
    const { id, name, close } = this.props;
    return (
      <div className="BookSummaryOverlay">
        <div className="BookSummaryOverlay-description">
          <h4>{name}</h4>
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
  name: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired
};

export default BookSummaryOverlay;
