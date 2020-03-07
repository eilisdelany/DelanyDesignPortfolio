import React from 'react'

const ProjectOverview = ({
  index,
  title,
  description,
  featuredImage,
  stakeholders,
  isHovered,
  onHover
}) => {
  const handleMouseEnter = () => onHover(index)
  const handleMouseLeave = () => onHover(null)
  console.log(featuredImage)
  return (
    <div
      className={`ProjectOverview rotate-${index} ${isHovered &&
        (isHovered === index ? 'hovered' : 'non-hovered')}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={featuredImage.fields.file.url}
        alt={featuredImage.fields.title}
      />
      <span className="name-description">
        {`${title} `}
        <span className="description">{stakeholders}</span>
      </span>
      <span className="title">{description}</span>
    </div>
  )
}

export default ProjectOverview
