import React, { Component } from "react";
import AOS from "aos";
import PageTitle from "../../components/PageTitle";
import "./index.scss";

class DigitalLibrary extends Component {
  componentDidMount() {
    AOS.init();
  }
  render() {
    return (
      <div className="DigitalLibrary">
        <PageTitle text="My personal library is in constant flux and never expands beyond ten books at a given time. I want this web page to act as a visual diary for those looking for more than bite-sized articles on digital devices." />
        <img
          href={
            "https://www.bookbind.net/Leather-Slip-On-Style-REGULAR-BIBLE-Book-Cover-p/b-sod-30h.htm"
          }
          alt="bible"
          data-aos="fade-right"
        />
      </div>
    );
  }
}
export default DigitalLibrary;
