import React, { Component } from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ArticlesArchive from './pages/ArticlesArchive';
import BlogArchive from './pages/BlogArchive';
import DigitalLibrary from './pages/DigitalLibrary';
import Contact from './pages/Contact';

import { pages } from './constants/pages';
import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <header>
              <Route path="/" component={Header} />
            </header>
            <div className="App-content">
              <Route exact path={pages.ITS_ME.path} component={Home} />
              <Route exact path={pages.TOP_FIVE.path} component={ArticlesArchive} />
              <Route exact path={pages.WORDS.path} component={BlogArchive} />
              <Route exact path={pages.HIT_LIST.path} component={DigitalLibrary} />
              <Route exact path={pages.LETS_TALK.path} component={Contact} />

            </div>
            <footer>
              <Route path="/" component={Footer} />
            </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
