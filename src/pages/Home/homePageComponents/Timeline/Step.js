import React from 'react'
import { format } from 'date-fns'

const formatDuration = (start, end) => {
  const formatDate = date => format(new Date(date), 'MMMM yyyy')
  return `${formatDate(start)} - ${end ? formatDate(end) : 'present'}`
}

const TimelineStep = ({
  startDate,
  endDate,
  company,
  title,
  location,
  position
}) => (
  <div className={`TimelineStep position-${position}`}>
    <div className="duration">{formatDuration(startDate, endDate)}</div>
    <div className="title">{title}</div>
    <div>
      <span className="company">{company}</span>, {location}
    </div>
  </div>
)

export default TimelineStep
