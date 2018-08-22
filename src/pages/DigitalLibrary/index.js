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
      selectedBookIndex: undefined
    };
  }

  selectBook = selectedBookIndex => {
    this.setState({ selectedBookIndex });
  };

  render() {
    const { selectedBookIndex } = this.state;
    const selectedBook = books[selectedBookIndex];
    return (
      <ParallaxProvider>
        <div className="DigitalLibrary">
          {selectedBook && (
            <section>
              <div className="DigitalLibrary-overlay" />
              <BookSummaryOverlay
                id={selectedBook.id}
                name={selectedBook.name}
                tags={selectedBook.tags}
                author={selectedBook.author}
                summary={selectedBook.summary}
                reference={selectedBook.reference}
                close={this.selectBook}
              />
            </section>
          )}
          <PageTitle text="My personal library is in constant flux and never expands beyond ten books at a given time. I want this web page to act as a visual diary for those looking for more than bite-sized articles on digital devices." />
          <div className="DigitalLibrary-container">
            {books.map(({ id, name, offsets }, index) => {
              return (
                <Parallax
                  key={index}
                  slowerScrollRate={index % 3 !== 0}
                  offsetXMin={offsets.xMin}
                  offsetXMax={offsets.xMax}
                  offsetYMin={offsets.yMin}
                  offsetYMax={offsets.yMax}
                  className={`DigitalLibrary-book DigitalLibrary-book-${index}`}
                >
                  <img
                    src={`/images/hit-list/${id}.png`}
                    alt={name}
                    onClick={() => this.selectBook(index)}
                  />
                </Parallax>
              );
            })}
          </div>
        </div>
      </ParallaxProvider>
    );
  }
}
export default DigitalLibrary;
