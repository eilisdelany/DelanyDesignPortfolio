import React, { Component } from "react";
import PropTypes from "prop-types";
import PageTitle from "../../components/PageTitle";
import ContentLayout from "../../components/ContentLayout";
import "./index.scss";

class Archive extends Component {
  render() {
    const { pageTitleText, archive } = this.props;
    return (
      <div className="Archive">
        <PageTitle text={pageTitleText} data-test="Archive-PageTitle" />
        {archive.map(({ date, files }, index) => {
          return (
            <ContentLayout
              key={index}
              subtitle={date}
              style={'highlight-on-hover'}
              content={files.map(({ text, url }, index) => {
                return (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    className="Archive-link"
                    data-test="Archive-link"
                  >
                    {text}
                  </a>
                );
              })}
              data-test="Archive-UrlLinksRow"
            />
          );
        })}
      </div>
    );
  }
}

Archive.propTypes = {
  pageTitleText: PropTypes.string.isRequired,
  archive: PropTypes.array.isRequired
};

export default Archive;
