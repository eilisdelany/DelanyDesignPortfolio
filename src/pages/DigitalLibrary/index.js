import React, { Component } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import PageTitle from "../../components/PageTitle";
import books from "../../constants/books.js";
import "./index.scss";

class DigitalLibrary extends Component {
  render() {
    return (
      <ParallaxProvider>
        <div className="DigitalLibrary">
          <PageTitle text="My personal library is in constant flux and never expands beyond ten books at a given time. I want this web page to act as a visual diary for those looking for more than bite-sized articles on digital devices." />
          <div className="DigitalLibrary-container">
            {books.map(
              (
                { name, offsetXMax, offsetXMin, offsetYMax, offsetYMin },
                index
              ) => {
                return (
                  <Parallax
                    key={index}
                    slowerScrollRate={index % 3 !== 0}
                    offsetXMin={offsetXMin}
                    offsetXMax={offsetXMax}
                    offsetYMin={offsetYMin}
                    offsetYMax={offsetYMax}
                    className={`DigitalLibrary-book DigitalLibrary-book-${index}`}
                  >
                    <img src={`/images/hit-list/${name}.jpg`} alt={name} />
                  </Parallax>
                );
              }
            )}
          </div>
        </div>
      </ParallaxProvider>
    );
  }
}
export default DigitalLibrary;
