import React, { Component } from "react";
import HiddenProject from "./HiddenProject";
import catalogue from "../../../archive/catalogue";

class Project extends Component {
  render() {
    const {
      match: { params },
      history
    } = this.props;
    if (!params.id || !catalogue.find(item => item.id === params.id)) {
      history.push("/error");
    }
    const item = catalogue.find(item => item.id === params.id);
    if (item.locked) {
      return <HiddenProject />;
    }
    // TODO
    return <div />;
  }
}

export default Project;
