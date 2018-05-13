import React, { Component } from "react";
import "../index.scss";

class IntroSection extends Component {
  navigateToFibonacciSection = () => {
    document.getElementById("FibonacciSection").scrollIntoView({
      block: "end", behavior: "smooth"
    });
  };

  render() {
    return (
      <section className="IntroSection">
        <h3>{"Introductions can be awkward..."}</h3>
        <h2>
          {"Particularly if you have an Irish name which sounds like "}
          <img src="/images/eyelash.png" alt="eyelash" />
        </h2>
        <span onClick={this.navigateToFibonacciSection}>
          {"Wanna scroll past the small talk?"}
        </span>
      </section>
    );
  }
}
export default IntroSection;
