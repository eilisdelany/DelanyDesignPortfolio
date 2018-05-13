import React, { Component } from "react";
import PropTypes from "prop-types";
import PageTitle from "../../../../components/PageTitle";
import ContentLayout from "../../../../components/ContentLayout";
import newsArticles from "../../../../archive/news-articles";
import "./index.scss";

class RealNews extends Component {
  render() {
    return (
      <section className="RealNews">
        <PageTitle
          text={`I'm not looking to get elected anytime soon so all my news is real.`}
        />
        <ContentLayout
          subtitle={newsArticles.title}
          wide
          content={newsArticles.files.map(({ text, source, url }, index) => {
            return (
              <div key={index} className="RealNews-row">
                  <a href={url} target="_blank">
                    {text}
                  </a>
                <span>{source}</span>
              </div>
            );
          })}
        />
      </section>
    );
  }
}

RealNews.propTypes = {
  goBack: PropTypes.func.isRequired
};

export default RealNews;
