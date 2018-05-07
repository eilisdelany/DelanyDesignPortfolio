import React, { Component } from "react";
import PropTypes from 'prop-types';
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

  navigateToTimeline = () => {
    document.getElementById('timeline').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  render() {
    const { selectComponent } = this.props;
    return (
      <div className="FibonacciSection">
        <FibonacciComponent
          name={homePageComponents.MANTRA}
          title="Mantra"
          selectComponent={selectComponent}
          description={`Some insights into the type of person I am, and what I do and don't believe in.`}
        />
        <FibonacciComponent
          name={homePageComponents.GRINDIN}
          title={`Grindin'`}
          selectComponent={this.navigateToTimeline}
        />
        <FibonacciComponent
          name={homePageComponents.SAY_WHAT}
          title="Say Whattttt??"
          selectComponent={selectComponent}
        />
        <FibonacciComponent
          name={homePageComponents.REAL_NEWS}
          title="Real News"
          selectComponent={selectComponent}
        />
        <FibonacciComponent
          name={homePageComponents.PINCH_ME}
          title="Pinch Me"
          selectComponent={selectComponent}
        />
        <FibonacciComponent
          name={homePageComponents.DREAM_DINNER}
          title="Dream Dinner"
          selectComponent={selectComponent}
        />
      </div>
    );
  }
}

FibonacciSection.propTypes = {
  selectComponent: PropTypes.func.isRequired
};

export default FibonacciSection;
