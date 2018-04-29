import React, { Component } from "react";
import PropTypes from "prop-types";
import PageTitle from "../../../../components/PageTitle";
import ContentLayout from "../../../../components/ContentLayout";
import Tags from "../../../../components/Tags";
import dinnerGuests from "../../../../archive/dinner-guests";
import "./index.scss";

class DreamDinner extends Component {
  renderGuest(name, reasons) {
    return (
      <div className="dinner-guest">
        <span>{name}</span>
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
          content={dinnerGuests.guests.map(({ name, reasons }, index) => {
            return index % 2 === 0 ? (
              <div key={index} className="DreamDinner-row">
                {this.renderGuest(name, reasons)}
                {index + 1 < dinnerGuests.guests.length &&
                  this.renderGuest(
                    dinnerGuests.guests[index + 1].name,
                    dinnerGuests.guests[index + 1].reasons
                  )}
              </div>
            ) : (
              ""
            );
          })}
        />
      </section>
    );
  }
}

DreamDinner.propTypes = {
  goBack: PropTypes.func.isRequired
};

export default DreamDinner;
