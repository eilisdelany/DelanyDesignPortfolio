import React, { Component } from "react";
import PageTitle from "../../../../components/PageTitle";
import ContentLayout from "../../../../components/ContentLayout";
import pinchMe from "../../../../archive/pinch-me";
import RerouteButton from "../../../../components/RerouteButton";
import { pages } from '../../../../constants/pages';
import "./index.scss";

class PinchMe extends Component {
  render() {
    return (
      <section className="PinchMe">
        <PageTitle
          text={`Awards make me cringe. Probably because I don't get them very often.`}
        />
        <ContentLayout
          subtitle={pinchMe.title}
          wide
          content={pinchMe.content.map(({ competition, url, award }, index) => {
            return (
              <div key={index} className="PinchMe-row">
                <a
                  className="PinchMe-row-competition"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {competition}
                </a>
                <span className="PinchMe-row-award">{award}</span>
              </div>
            );
          })}
        />
        <RerouteButton pathname={pages.ITS_ME.path} scrollToComponent />
      </section>
    );
  }
}
export default PinchMe;
