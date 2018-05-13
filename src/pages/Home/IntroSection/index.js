import React, { Component } from "react";
import "../index.scss";

class IntroSection extends Component {

  render() {
    return (
      <section className="IntroSection">
        <h3>{"Introductions can be awkward..."}</h3>
        <h2>
          {"Particularly if you have an Irish name which sounds like "}
          <img src="/images/eyelash.png" alt="eyelash" />
        </h2>
        <span>
          {"Wanna scroll past the small talk?"}
        </span>
      </section>
    );
  }
}
export default IntroSection;
