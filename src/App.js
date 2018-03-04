import React, { Component } from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <header>
              <Route path="/" component={Header} />
            </header>
            <div className="App-content">
              <Route exact path="/" component={Home} />
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
