import React, { Component } from "react";
import PropTypes from "prop-types";
import ComingSoonSection from '../../../../components/ComingSoonSection';

class PinchMe extends Component {
  render() {
    return <ComingSoonSection />;
  }
}

PinchMe.propTypes = {
  goBack: PropTypes.string.isRequired
};

export default PinchMe;
