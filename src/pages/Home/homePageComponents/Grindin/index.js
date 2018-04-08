import React, { Component } from "react";
import PropTypes from "prop-types";
import ComingSoonSection from '../../../../components/ComingSoonSection';

class Grindin extends Component {
  render() {
    return <ComingSoonSection />;
  }
}

Grindin.propTypes = {
  goBack: PropTypes.string.isRequired
};

export default Grindin;