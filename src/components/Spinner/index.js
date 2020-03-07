import React from 'react'

import './index.scss'

const Spinner = () => (
  <svg
    className="spinner"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <rect className="rect" x="0" y="0"></rect>
    <circle className="circle" cx="50" cy="50" r="40"></circle>
  </svg>
)

export default Spinner
