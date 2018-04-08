import React, { Component } from "react";
import FibonacciComponent from "./FibonacciComponent";
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
      <div className="FibonacciSection">
        <FibonacciComponent
          name="mantra"
          title="Mantra"
          description={`Some insights into the type of person I am, and what I do and don't believe in.`}
        />
        <FibonacciComponent name="grindin" title={`Grindin'`} />
        <FibonacciComponent name="say-what" title="Say Whattttt??" />
        <FibonacciComponent name="real-news" title="Real News" />
        <FibonacciComponent name="pinch-me" title="Pinch Me" />
        <FibonacciComponent name="dream-dinner" title="Dream Dinner" />
      </div>
    );
  }
}

export default FibonacciSection;
