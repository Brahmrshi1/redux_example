import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

import { activateDude, closeDude } from './redux';


export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
        <h1>{this.props.dude.title || 'Hello World!'}</h1>

{this.props.dude.title ? (
  <button onClick={this.props.closeDude}>Exit Dude</button>
) : (
  <button
    onClick={() =>
      this.props.activateDude({ title: 'Welcome Dude ' })
    }
  >
    Click Me Dude !
  </button>
)}
        </div>
      </div>
    );
  }
}



const mapStateToProps = state => ({
  dude: state.dude,
});

const mapDispatchToProps = {
  activateDude,
  closeDude,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;


