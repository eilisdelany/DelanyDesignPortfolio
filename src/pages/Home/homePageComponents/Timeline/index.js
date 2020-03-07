import React, { useEffect } from 'react'
import TimelineStep from './Step'
import StatefulComponent from '../../../../components/StatefulComponent'
import contentful from '../../../../clients/contentful'

import './index.scss'

const Timeline = ({ data }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="Timeline">
      {data.map((experience, index) => (
        <div
          key={`timeline--${index}`}
          className={`timeline-block ${index % 2 === 0 ? 'even' : 'odd'}`}
        >
          <TimelineStep position={index} {...experience} />
        </div>
      ))}
    </div>
  )
}

const startDate = data =>
  data.sort((a, b) => new Date(b.startDate) - new Date(a.startDate))

export default () => (
  <StatefulComponent
    fetchData={contentful.getWorkExperience}
    sortData={startDate}
  >
    <Timeline />
  </StatefulComponent>
)
