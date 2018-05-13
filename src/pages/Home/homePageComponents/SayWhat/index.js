import React, { Component } from "react";
import PropTypes from "prop-types";
import PageTitle from "../../../../components/PageTitle";
import ContentLayout from "../../../../components/ContentLayout";
import Tags from '../../../../components/Tags';
import references from "../../../../archive/references";
import "./index.scss";

class SayWhat extends Component {
  render() {
    return (
      <section className="SayWhat">
        <PageTitle
          text={`I don’t like talking about myself so I let other people do it for me.`}
        />
        <ContentLayout
          subtitle={references.title}
          wide
          content={references.content.map(({ quote, name, role, company }, index) => {
            return (
              <div key={index} className="SayWhat-row">
                <span className="SayWhat-quote">{`"${quote}"`}</span>
                <Tags tags={[name, role, company]} bold />
              </div>
            );
          })}
        />
      </section>
    );
  }
}

SayWhat.propTypes = {
  goBack: PropTypes.func.isRequired
};

export default SayWhat;