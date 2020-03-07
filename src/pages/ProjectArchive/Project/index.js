import React, { Component } from "react";
import HiddenProject from "./HiddenProject";
import ProjectHeader from "./ProjectHeader";
import ProjectBody from "./ProjectBody";
import catalogue from "../../../archive/catalogue/index";

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
    const { header, content } = item.project;
    return (
      <section className="Project">
        <ProjectHeader
          title={header.title}
          image={`${item.id}/${header.image}`}
          labels={header.labels}
          when={header.when}
        />
        <ProjectBody content={content} projectId={item.id} />
      </section>
    );
  }
}

export default Project;
