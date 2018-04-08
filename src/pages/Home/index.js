import React, { Component } from 'react';
import IntroSection from './IntroSection';
import FibonacciSection from './FibonacciSection'
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
        <FibonacciSection />
      </div>
    );
  }
}
export default Home;
