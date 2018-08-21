import React, { Component } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import PageTitle from "../../components/PageTitle";
import BookSummaryOverlay from "./BookSummaryOverlay";
import books from "../../constants/books.js";
import "./index.scss";

class DigitalLibrary extends Component {
  constructor() {
    super();
    this.state = {
      selectedBook: undefined
    };
  }

  selectBook = selectedBook => {
    this.setState({ selectedBook });
  };

  render() {
    const { selectedBook } = this.state;
    return (
      <ParallaxProvider>
        <div className="DigitalLibrary">
          {selectedBook >= 0 && (
            <section>
              <div className="DigitalLibrary-overlay" />
              <BookSummaryOverlay
                id={books[selectedBook].id}
                name={books[selectedBook].name}
                summary={books[selectedBook].summary}
                close={this.selectBook}
              />
            </section>
          )}
          <PageTitle
            text="My personal library is in constant flux and never expands beyond ten books at a given time. I want this web page to act as a visual diary for those looking for more than bite-sized articles on digital devices."
          />
          <div className="DigitalLibrary-container">
            {books.map(
              (
                { id, name, offsetXMax, offsetXMin, offsetYMax, offsetYMin },
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
                    <img
                      src={`/images/hit-list/${id}.png`}
                      alt={name}
                      onClick={() => this.selectBook(index)}
                    />
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
