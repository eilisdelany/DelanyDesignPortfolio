import React, { Component } from 'react';
import IntroSection from './IntroSection'
import './index.scss';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <IntroSection />
        <section className="teaser-section">
          <div className="teaser-text">{'I like you already'}</div>
          <div className="teaser-line" />
        </section>
      </div>
    );
  }
}
export default Home;
