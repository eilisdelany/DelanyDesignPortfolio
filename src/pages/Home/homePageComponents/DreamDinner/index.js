import React, { Component } from "react";
import PropTypes from "prop-types";
import ComingSoonSection from '../../../../components/ComingSoonSection';

class DreamDinner extends Component {
  render() {
    return <ComingSoonSection />;
  }
}

DreamDinner.propTypes = {
  goBack: PropTypes.string.isRequired
};

export default DreamDinner;
