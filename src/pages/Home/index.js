import React, { Component } from "react";
import IntroSection from "./IntroSection";
import TeaserSection from "./TeaserSection";
import FibonacciSection from "./FibonacciSection";
import homePageComponents from "../../constants/homePageComponents";
import Mantra from "./homePageComponents/Mantra";
import Grindin from './homePageComponents/Grindin';
import SayWhat from './homePageComponents/SayWhat';
import RealNews from './homePageComponents/RealNews';
import PinchMe from './homePageComponents/PinchMe';
import DreamDinner from './homePageComponents/DreamDinner';
import "./index.scss";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      selectedHomeComponent: undefined
    };
  }

  updateSelectedHomeComponent = (selectedHomeComponent = undefined) => {
    this.setState({ selectedHomeComponent });
  };

  render() {
    switch (this.state.selectedHomeComponent) {
      case homePageComponents.MANTRA:
        return <Mantra goBack={this.updateSelectedHomeComponent} />;
      case homePageComponents.GRINDIN:
        return <Grindin goBack={this.updateSelectedHomeComponent} />;
      case homePageComponents.SAY_WHAT:
        return <SayWhat goBack={this.updateSelectedHomeComponent} />;
      case homePageComponents.REAL_NEWS:
        return <RealNews goBack={this.updateSelectedHomeComponent} />;
      case homePageComponents.PINCH_ME:
        return <PinchMe goBack={this.updateSelectedHomeComponent} />;
      case homePageComponents.DREAM_DINNER:
        return <DreamDinner goBack={this.updateSelectedHomeComponent} />;
      default:
        return (
          <div className="Home">
            <IntroSection />
            <TeaserSection />
            <FibonacciSection
              selectComponent={this.updateSelectedHomeComponent}
            />
          </div>
        );
    }
  }
}
export default Home;
