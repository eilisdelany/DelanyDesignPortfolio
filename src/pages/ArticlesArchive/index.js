import React, { Component } from 'react';
import PageTitle from '../../components/PageTitle'
import UrlLinksRow from '../../components/UrlLinksRow';
import articles from '../../archive/top-five';
import './index.scss';

const pageTitleText = "This is my digital treasure trove - a curated collection of links covering science, technology, design and personal growth.";

class ArticlesArchive extends Component {
  render() {
    return (
      <div className="ArticlesArchive">
        <PageTitle text={pageTitleText} />
        {
          articles.map(({date, files}, index) => {
            return (
              <UrlLinksRow
                key={index}
                date={date}
                files={files}
              />
            );
          })
      }
      </div>
    );
  }
}
export default ArticlesArchive;
