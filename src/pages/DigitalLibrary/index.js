import React, { Component } from "react";
import PropTypes from "prop-types";
import PageTitle from "../../components/PageTitle";
import Book from "./Book";
import "./index.scss";

class DigitalLibrary extends Component {
  render() {
    return (
      <div className="DigitalLibrary">
        <PageTitle text={this.props.pageTitleText} />
        <div className="DigitalLibrary-body">
          <Book name="Linchpin" className="book-1" />
          <Book name="Make" className="book-2" />
          <Book name="LawsOfSimplicity" className="book-3" />
          <Book name="WhereGoodIdeasComeFrom" className="book-4" />
          <Book name="Sprint" className="book-5" />
          <Book name="Mindset" className="book-6" />
          <Book name="ThinkingFastAndSlow" className="book-7" />
          <Book name="TheCircle" className="book-8" />
          <Book name="BusinessModelGeneration" className="book-9" />
          <Book name="LetMyPeopleGoSurfing" className="book-10" />
          <Book name="Superintelligence" className="book-11" />
          <Book name="ContentDesign" className="book-12" />
          <Book name="Holo2" className="book-13" />
          <Book name="HelloRobot" className="book-14" />
          <Book name="MarketCafeMagazine" className="book-15" />
          <Book name="Cartographics" className="book-16" />
        </div>
      </div>
    );
  }
}
DigitalLibrary.propTypes = {
  pageTitleText: PropTypes.string.isRequired
};
export default DigitalLibrary;
