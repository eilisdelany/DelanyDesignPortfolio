import React, { Component } from "react";
import PropTypes from "prop-types";

class TimelineStep extends Component {
  render() {
    const { dates, place, role, work, position } = this.props;
    return (
      <div className={`TimelineStep position-${position}`}>
        <div className="header">{dates}</div>
        <div className="subheader">{place}</div>
        <div className="subheader">{role}</div>
        <div className="content">
          {work.map((item, index) => {
            return <div key={index}>{`- ${item}`}</div>;
          })}
        </div>
      </div>
    );
  }
}

TimelineStep.propTypes = {
  dates: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  work: PropTypes.array.isRequired,
  position: PropTypes.number.isRequired
};

export default TimelineStep;
