import React from 'react'
import PageTitle from '../../components/PageTitle'
import ContentLayout from '../../components/ContentLayout'
import StatefulComponent from '../../components/StatefulComponent'
import { formatContentfulDate } from '../../utils'
import contentful from '../../clients/contentful'

import './index.scss'

const sortByWeekStarting = data =>
  data.sort((a, b) => new Date(b.weekStarting) - new Date(a.weekStarting))

const TopFiveArticles = ({ title }) => {
  return (
    <div className="TopFive">
      <PageTitle text={title} />
      <StatefulComponent
        fetchData={contentful.getTopFiveArticles}
        sortData={sortByWeekStarting}
      >
        <Content />
      </StatefulComponent>
    </div>
  )
}

export default TopFiveArticles

const Content = ({ data }) =>
  data.map(({ weekStarting, articles: weeklyArticles }, index) => (
    <ContentLayout
      key={index}
      subtitle={formatContentfulDate(weekStarting)}
      highlightOnHover
      content={weeklyArticles.map(
        ({ fields: { url, external, label } }, weeklyIdx) => (
          <a
            href={url}
            className="TopFive-link"
            key={`weekly-${weeklyIdx}`}
            {...(external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            {label}
          </a>
        )
      )}
    />
  ))
