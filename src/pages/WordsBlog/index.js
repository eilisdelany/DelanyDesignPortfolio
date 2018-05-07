import React, { Component } from "react";
import PageTitle from "../../components/PageTitle";
import Tags from '../../components/Tags';

class WordsBlog extends Component {
  render() {
    const { title, content, tags } = this.props.location.state;
    console.log(this.props.location.state);

    return (
      <div className="WordsBlog">
        <PageTitle text={title} data-test="WordsBlog-PageTitle" />
        <div>
          {content}
        </div>
        <Tags tags={tags} />
      </div>
    );
  }
}

export default WordsBlog;
