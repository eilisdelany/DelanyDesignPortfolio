import React, { Component } from 'react';
import './index.scss';

class ComingSoonSection extends Component {
  render() {
    return (
      <div className="ComingSoonSection">
        <img
          className="ComingSoonSection-logo"
          src="/images/logo.png"
          alt="eyelash logo"
        />
        <span className="ComingSoonSection-text">
          {`Sit tight. I'm on my way!`}
        </span>
      </div>
    );
  }
}
export default ComingSoonSection;
