import React, { Component } from "react";
import PageTitle from "../../../../components/PageTitle";
import ContentLayout from "../../../../components/ContentLayout";
import Tags from "../../../../components/Tags";
import dinnerGuests from "../../../../archive/dinner-guests";
import RerouteButton from "../../../../components/RerouteButton";
import { pages } from '../../../../constants/pages';
import "./index.scss";

class DreamDinner extends Component {
  componentDidMount () {
    window.scrollTo(0, 0);
  }

  renderGuest({ name, url, reasons }) {
    return (
      <div className="dinner-guest">
        <span>
          <a className="dinner-guest-url" href={url} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </span>
        <Tags tags={reasons} />
      </div>
    );
  }

  render() {
    return (
      <section className="DreamDinner">
        <PageTitle
          text={`Because at some point in life, we’ve all dreamt of breaking bread and sharing wine with some of our favourite icons, dead or alive.`}
        />
        <ContentLayout
          subtitle={dinnerGuests.title}
          content={dinnerGuests.guests.map((guest, index) => {
            return index % 2 === 0 ? (
              <div key={index} className="DreamDinner-row">
                {this.renderGuest(guest)}
                {index + 1 < dinnerGuests.guests.length &&
                  this.renderGuest(dinnerGuests.guests[index + 1])}
              </div>
            ) : (
              ""
            );
          })}
        />
        <RerouteButton pathname={pages.ITS_ME.path} scrollToComponent />
      </section>
    );
  }
}
export default DreamDinner;
