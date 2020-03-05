import React from 'react'
import './index.scss'

const types = {
  FETCHING:
    "I can't seem to find this info right now, Please come back later and try again.",
  GENERIC: 'Looks like theres a problem here, please try again later.'
}

const ErrorMessage = ({ type }) => (
  <span className="message">{types[type] || types.GENERIC}</span>
)

export default ErrorMessage
