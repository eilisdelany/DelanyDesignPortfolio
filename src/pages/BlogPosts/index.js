import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PageTitle from '../../components/PageTitle'
import StatefulComponent from '../../components/StatefulComponent'
import { formatContentfulDate } from '../../utils'
import ContentLayout from '../../components/ContentLayout'
import contentful from '../../clients/contentful'

import './index.scss'

const sortByMostRecent = (data) => data.sort((a, b) => new Date(b.date) - new Date(a.date))

class BlogPosts extends Component {
  render() {
    const { pageTitleText } = this.props
    return (
      <div className="BlogPosts">
        <PageTitle text={pageTitleText} data-test="BlogPosts-PageTitle" />
        <StatefulComponent fetchData={contentful.getBlogPosts} sortData={sortByMostRecent}>
          <BlogPostContent {...this.props} />
        </StatefulComponent>
      </div>
    )
  }
}

const BlogPostContent = ({ data, Content }) =>
  data.map(({ date, ...content }, index) => (
    <ContentLayout
      key={index}
      subtitle={formatContentfulDate(date)}
      highlightOnHover
      content={[content].map((props) => (
        <Content key={index} {...props} />
      ))}
      data-test="BlogPosts-UrlLinksRow"
    />
  ))

BlogPosts.propTypes = {
  pageTitleText: PropTypes.string.isRequired,
  archive: PropTypes.array.isRequired,
  Content: PropTypes.func.isRequired,
}

export default BlogPosts
