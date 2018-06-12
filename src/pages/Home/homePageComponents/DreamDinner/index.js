import React, { Component } from "react";
import PropTypes from "prop-types";
import PageTitle from "../../../../components/PageTitle";
import ContentLayout from "../../../../components/ContentLayout";
import Tags from "../../../../components/Tags";
import dinnerGuests from "../../../../archive/dinner-guests";
import RerouteButton from "../../../../components/RerouteButton";
import "./index.scss";

class DreamDinner extends Component {
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
        <RerouteButton onClick={this.props.goBack} />
      </section>
    );
  }
}

DreamDinner.propTypes = {
  goBack: PropTypes.func.isRequired
};

export default DreamDinner;
