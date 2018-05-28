import React, { Component } from "react";
import PropTypes from "prop-types";
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
        <PageTitle text={this.props.pageTitleText} />
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
DigitalLibrary.propTypes = {
  pageTitleText: PropTypes.string.isRequired,
};
export default DigitalLibrary;
