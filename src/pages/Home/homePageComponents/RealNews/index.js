import React, { Component } from "react";
import PropTypes from "prop-types";
import ComingSoonSection from '../../../../components/ComingSoonSection';

class RealNews extends Component {
  render() {
    return <ComingSoonSection />;
  }
}

RealNews.propTypes = {
  goBack: PropTypes.string.isRequired
};

export default RealNews;
