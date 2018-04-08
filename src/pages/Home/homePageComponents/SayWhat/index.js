import React, { Component } from "react";
import PropTypes from "prop-types";
import ComingSoonSection from '../../../../components/ComingSoonSection';

class SayWhat extends Component {
  render() {
    return <ComingSoonSection />;
  }
}

SayWhat.propTypes = {
  goBack: PropTypes.string.isRequired
};

export default SayWhat;
