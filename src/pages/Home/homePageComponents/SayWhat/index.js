import React, { Component } from "react";
import PageTitle from "../../../../components/PageTitle";
import ContentLayout from "../../../../components/ContentLayout";
import Tags from '../../../../components/Tags';
import references from "../../../../archive/references";
import RerouteButton from "../../../../components/RerouteButton";
import { pages } from '../../../../constants/pages';
import "./index.scss";

class SayWhat extends Component {
  componentDidMount () {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="SayWhat">
        <PageTitle
          text={`I don’t like talking about myself so I let other people do it for me.`}
        />
        <ContentLayout
          subtitle={references.title}
          wide
          content={references.content.map(({ quote, name, role, company }, index) => {
            return (
              <div key={index} className="SayWhat-row">
                <span className="SayWhat-quote">{`"${quote}"`}</span>
                <Tags tags={[name, role, company]} bold />
              </div>
            );
          })}
        />
        <RerouteButton pathname={pages.ITS_ME.path} scrollToComponent />
      </section>
    );
  }
}
export default SayWhat;