import React, { Component } from "react";
import PropTypes from "prop-types";
import ComingSoonSection from '../../../../components/ComingSoonSection';

class Mantra extends Component {
  render() {
    return <ComingSoonSection />;
  }
}

Mantra.propTypes = {
  goBack: PropTypes.string.isRequired
};

export default Mantra;
