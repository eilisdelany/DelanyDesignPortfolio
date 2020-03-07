import React, { Component } from 'react'
import PageTitle from '../../../../components/PageTitle'
import ContentLayout from '../../../../components/ContentLayout'
import mantra from '../../../../archive/mantra'
import './index.scss'

class Mantra extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <section className="Mantra">
        <PageTitle
          text={`Approximately 2% of the worlds population are protoganists. I’m a member of that tribe, as is Oprah Winfrey and Barack Obama. We’re a determined group of people who firmly believe in people. Some of us are politicians or coaches, I’m a designer.`}
        />
        <ContentLayout wide subtitle={mantra.title} content={mantra.content} />
        {/* <RerouteButton pathname={pages.ITS_ME.path} scrollToComponent /> */}
      </section>
    )
  }
}
export default Mantra
