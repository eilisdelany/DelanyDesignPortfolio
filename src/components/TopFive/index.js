import React from 'react'
import './index.scss'

const TopFive = ({ url, label, external }) => (
  <a
    href={url}
    className="TopFive-link"
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
  >
    {label}
  </a>
)
export default TopFive
