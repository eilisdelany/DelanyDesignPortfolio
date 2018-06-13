import React, { Component } from "react";
import IntroSection from "./IntroSection";
import TeaserSection from "./TeaserSection";
import FibonacciSection from "./FibonacciSection";
import "./index.scss";

const componentId = "fibonacci-section";

class Home extends Component {
  componentDidMount() {
    if (this.props.location.state && this.props.location.state.scrollToComponent) {
      document.getElementById(componentId).scrollIntoView();
    }
  }

  render() {
    return (
      <div className="Home">
        <IntroSection />
        <TeaserSection />
        <FibonacciSection componentId={componentId} />
      </div>
    );
  }
}
export default Home;
