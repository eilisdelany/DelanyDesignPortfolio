import React, { Component } from "react";
import PropTypes from "prop-types";
import FibonacciComponent from "./FibonacciComponent";
import homePageComponents from "../../../constants/homePageComponents";
import "./index.scss";

class FibonacciSection extends Component {
  constructor() {
    super();
    this.state = {
      isHoveringOnMantra: false
    };
  }

  setIsHoverOnMantra = () => {
    this.setState({ isHoveringOnMantra: true });
  };

  unsetIsHoverOnMantra = () => {
    this.setState({ isHoveringOnMantra: false });
  };

  render() {
    return (
      <div className="FibonacciSection" id={this.props.componentId}>
        <FibonacciComponent
          name={homePageComponents.MANTRA}
          title="Mantra"
          description={`My guiding design principles.`}
        />
        <FibonacciComponent
          name={homePageComponents.GRINDIN}
          title={`Grindin'`}
        />
        <FibonacciComponent
          name={homePageComponents.SAY_WHAT}
          title="Say Whattttt??"
        />
        <FibonacciComponent
          name={homePageComponents.REAL_NEWS}
          title="Real News"
        />
        <FibonacciComponent
          name={homePageComponents.PINCH_ME}
          title="Pinch Me"
        />
        <FibonacciComponent
          name={homePageComponents.DREAM_DINNER}
          title="Dream Dinner"
        />
      </div>
    );
  }
}
FibonacciSection.propTypes = {
  componentId: PropTypes.string
};
export default FibonacciSection;
