import React, { useEffect } from 'react'
import PageTitle from '../../../../components/PageTitle'
import ContentLayout from '../../../../components/ContentLayout'
import StatefulComponent from '../../../../components/StatefulComponent'
import Tags from '../../../../components/Tags'
import contentful from '../../../../clients/contentful'
import './index.scss'

const Guest = ({ name, url, attributes }) => (
  <div className="dinner-guest">
    <span>
      <a className="dinner-guest-url" href={url} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    </span>
    <Tags tags={attributes} />
  </div>
)

const DreamDinner = ({ data }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="DreamDinner">
      <PageTitle
        text={`Because at some point in life, we’ve all dreamt of breaking bread and sharing wine with some of our favourite icons, dead or alive.`}
      />
      <ContentLayout
        subtitle={'Dream dinner guests'}
        content={data.map(
          (guest, index) =>
            index % 2 === 0 && (
              <div key={index} className="DreamDinner-row">
                <Guest {...guest} />
                {index + 1 < data.length && <Guest {...data[index + 1]} />}
              </div>
            )
        )}
      />
      {/* <RerouteButton pathname={pages.ITS_ME.path} scrollToComponent /> */}
    </section>
  )
}

export default () => (
  <StatefulComponent fetchData={contentful.getDinnerGuests}>
    <DreamDinner />
  </StatefulComponent>
)
