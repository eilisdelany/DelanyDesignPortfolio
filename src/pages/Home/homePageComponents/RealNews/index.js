import React, { Component } from 'react'
import PageTitle from '../../../../components/PageTitle'
import ContentLayout from '../../../../components/ContentLayout'
import newsArticles from '../../../../archive/news-articles'
import './index.scss'

class RealNews extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <section className="RealNews">
        <PageTitle
          text={`I'm not looking to get elected anytime soon so all my news is real.`}
        />
        <ContentLayout
          subtitle={newsArticles.title}
          wide
          content={newsArticles.files.map(({ text, source, url }, index) => {
            return (
              <div key={index} className="RealNews-row">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {text}
                </a>
                <span>{source}</span>
              </div>
            )
          })}
        />
        {/* <RerouteButton pathname={pages.ITS_ME.path} scrollToComponent /> */}
      </section>
    )
  }
}

export default RealNews
