import React, { useEffect, useState } from 'react'
import Overview from './ProjectOverview'
import StatefulComponent from '../../components/StatefulComponent'
import contentful from '../../clients/contentful'

import './index.scss'

const ProjectArchive = ({ data: { projects } }) => {
  const [hoveredComponent, updateHoveredComponent] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="ProjectArchive">
      {projects.map(({ fields }, index) => {
        return (
          <div key={`ArchiveItem--${index}`}>
            <Overview
              {...fields}
              index={`project-${index}`}
              isHovered={hoveredComponent}
              onHover={updateHoveredComponent}
            />
          </div>
        )
      })}
    </div>
  )
}

const getFirst = data => (data.length ? data[0] : null)

export default () => (
  <StatefulComponent
    fetchData={contentful.getProjectArchive}
    sortData={getFirst}
  >
    <ProjectArchive />
  </StatefulComponent>
)
