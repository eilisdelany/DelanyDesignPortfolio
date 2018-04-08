import React, { Component } from 'react';
import './index.scss';

class FibonacciSection extends Component {
  constructor () {
    super();
    this.state = {
      isHoveringOnMantra: false
    }
  }

  setIsHoverOnMantra = () => {
    this.setState({ isHoveringOnMantra: true });
  }

  unsetIsHoverOnMantra = () => {
    this.setState({ isHoveringOnMantra: false });
  }

  render() {
    return (
      <div className="FibonacciSection">
        <div
          className="fibonacci-component mantra"
          onMouseEnter={this.setIsHoverOnMantra}
          onMouseLeave={this.unsetIsHoverOnMantra}
        >
          <div>
            <span className="title">{'Mantra'}</span>
            {this.state.isHoveringOnMantra && (
              <span className="description">
                {`Some insights into the type of person I am, and what I do and don't believe in.`}
              </span>
            )}
          </div>
        </div>
        <div className="fibonacci-component grindin">
          <span>{`Grindin'`}</span>
        </div>
        <div className="fibonacci-component say-what">
          <span>{'Say Whattttt??'}</span>
        </div>
        <div className="fibonacci-component real-news">
          <span>{'Real News'}</span>
        </div>
        <div className="fibonacci-component pinch-me">
          <span>{'Pinch Me'}</span>
        </div>
        <div className="fibonacci-component dream-dinner">
          <span>{'Dream Dinner'}</span>
        </div>
      </div>
    );
  }
}


export default FibonacciSection;
