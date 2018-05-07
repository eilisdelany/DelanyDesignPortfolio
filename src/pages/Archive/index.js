import React, { Component } from "react";
import PropTypes from "prop-types";
import PageTitle from "../../components/PageTitle";
import ContentLayout from "../../components/ContentLayout";
import "./index.scss";

class Archive extends Component {
  render() {
    const { pageTitleText, archive, Content } = this.props;
    return (
      <div className="Archive">
        <PageTitle text={pageTitleText} data-test="Archive-PageTitle" />
        {archive.map(({ date, files }, index) => {
          return (
            <ContentLayout
              key={index}
              subtitle={date}
              highlight
              content={files.map((content, index) => {
                return (
                  <Content props={content} />
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
  archive: PropTypes.array.isRequired,
  Content: PropTypes.func.isRequired,
};

export default Archive;
