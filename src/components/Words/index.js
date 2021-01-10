import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Tags from '../../components/Tags'
import './index.scss'

class Words extends Component {
  render() {
    const {
      link: { fields },
      readingDuration,
      tags,
    } = this.props
    return (
      <Fragment>
        <a href={fields.url} target="_blank" rel="noopener noreferrer" className="Words-link">
          <span className="Words-title">{`${fields.label} [${readingDuration} minutes]`}</span>
        </a>
        <Tags tags={tags} />
      </Fragment>
    )
  }
}

Words.propTypes = {
  props: PropTypes.objectOf({
    fields: PropTypes.objectOf({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
    readingDuration: PropTypes.number.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
}

export default Words
