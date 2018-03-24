import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../../components/PageTitle'
import UrlLinksRow from '../../components/UrlLinksRow';
import './index.scss';


class Archive extends Component {
  render() {
    const { pageTitleText, archive } = this.props;
    return (
      <div className="Archive">
        <PageTitle text={pageTitleText} data-test="Archive-PageTitle" />
        {
          archive.map(({date, files}, index) => {
            return (
              <UrlLinksRow
                key={index}
                date={date}
                files={files}
                data-test="Archive-UrlLinksRow"
              />
            );
          })
      }
      </div>
    );
  }
}

Archive.propTypes = {
    pageTitleText: PropTypes.string.isRequired,
    archive: PropTypes.array.isRequired
};

export default Archive;