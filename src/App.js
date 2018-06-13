import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import Archive from "./pages/Archive";
import DigitalLibrary from "./pages/DigitalLibrary";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Words from "./components/Words";
import TopFive from "./components/TopFive";
import blogPosts from "./archive/blog-posts";
import topFive from "./archive/top-five";

import Mantra from "./pages/Home/homePageComponents/Mantra";
import Timeline from "./pages/Home/homePageComponents/Timeline";
import SayWhat from "./pages/Home/homePageComponents/SayWhat";
import RealNews from "./pages/Home/homePageComponents/RealNews";
import PinchMe from "./pages/Home/homePageComponents/PinchMe";
import DreamDinner from "./pages/Home/homePageComponents/DreamDinner";

import { pages } from "./constants/pages";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <Route path="/" component={Header} />
          </header>
          <div className="App-content">
            <Switch>
              <Route exact path={pages.ITS_ME.path} component={Home} />
              <Route
                exact
                path={pages.ITS_ME.subpages.MANTRA}
                component={Mantra}
              />
              <Route
                exact
                path={pages.ITS_ME.subpages.GRINDIN}
                component={Timeline}
              />
              <Route
                exact
                path={pages.ITS_ME.subpages.SAY_WHAT}
                component={SayWhat}
              />
              <Route
                exact
                path={pages.ITS_ME.subpages.REAL_NEWS}
                component={RealNews}
              />
              <Route
                exact
                path={pages.ITS_ME.subpages.PINCH_ME}
                component={PinchMe}
              />
              <Route
                exact
                path={pages.ITS_ME.subpages.DREAM_DINNER}
                component={DreamDinner}
              />
              <Route exact path={pages.CATALOGUE.path} component={Catalogue} />
              <Route
                exact
                path={pages.TOP_FIVE.path}
                render={props => (
                  <Archive
                    pageTitleText={pages.TOP_FIVE.pageTitle}
                    archive={topFive}
                    Content={TopFive}
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path={pages.WORDS.path}
                render={props => (
                  <Archive
                    pageTitleText={pages.WORDS.pageTitle}
                    archive={blogPosts}
                    Content={Words}
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path={pages.HIT_LIST.path}
                render={props => (
                  <DigitalLibrary
                    pageTitleText={pages.HIT_LIST.pageTitle}
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path={pages.LETS_TALK.path}
                render={props => (
                  <Contact
                    pageTitleText={pages.LETS_TALK.pageTitle}
                    {...props}
                  />
                )}
              />
              <Route component={ErrorPage} />
            </Switch>
          </div>
            <Route
              path="/"
              render={props => props.location.pathname !== "/" && <Footer />}
            />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
