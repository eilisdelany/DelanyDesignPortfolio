import React, { Component, Fragment } from "react";
import TimelineStep from "./TimelineStep";
import timeline from "../../../archive/timeline";
import "./index.scss";

class Timeline extends Component {
  render() {
    return (
      <div className="Timeline">
        <div className="Timeline-line" />
        {timeline.map(({ dates, place, role, work, years }, index) => {
          return (
            <Fragment>
            <TimelineStep
              key={index}
              dates={dates}
              place={place}
              role={role}
              work={work}
              years={years}
              position={index}
            />
            <div className={`Timeline-link Timeline-link-${index}`} />
            </Fragment>
          );
        })}
      </div>
    );
  }
}

export default Timeline;
