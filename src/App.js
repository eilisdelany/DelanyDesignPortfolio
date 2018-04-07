import React, { Component } from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalogue from './pages/Catalogue';
import Archive from './pages/Archive';
import DigitalLibrary from './pages/DigitalLibrary';
import Contact from './pages/Contact';
import blogPosts from './archive/blog-posts';
import topFive from './archive/top-five';

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
              <Route exact path={pages.CATALOGUE.path} component={Catalogue} />
              <Route
                exact
                path={pages.TOP_FIVE.path}
                render={(props) => (
                  <Archive
                    pageTitleText={pages.TOP_FIVE.pageTitle}
                    archive={topFive}
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path={pages.WORDS.path}
                render={(props) => (
                  <Archive
                    pageTitleText={pages.WORDS.pageTitle}
                    archive={blogPosts}
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path={pages.HIT_LIST.path}
                render={(props) => (
                  <DigitalLibrary
                    pageTitleText={pages.HIT_LIST.pageTitle}
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path={pages.LETS_TALK.path}
                render={(props) => (
                  <Contact
                    pageTitleText={pages.LETS_TALK.pageTitle}
                    {...props}
                  />
                )}
              />
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
