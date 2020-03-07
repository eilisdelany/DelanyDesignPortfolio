import React, { Component, Fragment } from 'react'
import TimelineStep from './TimelineStep'
import timeline from '../../../../archive/timeline'
import './index.scss'

class Timeline extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="Timeline">
        <div className="Timeline-line" />
        {timeline.map(({ dates, place, role, work, years }, index) => {
          return (
            <Fragment key={index}>
              <TimelineStep
                dates={dates}
                place={place}
                role={role}
                work={work}
                years={years}
                position={index}
              />
              <div className={`Timeline-link Timeline-link-${index}`}>
                {Array.from({ length: years }, (year, yearIndex) => {
                  return (
                    <div
                      key={yearIndex}
                      className={`notch notch-${yearIndex}`}
                    />
                  )
                })}
              </div>
            </Fragment>
          )
        })}
        {/* <RerouteButton pathname={pages.ITS_ME.path} scrollToComponent /> */}
      </div>
    )
  }
}

export default Timeline
