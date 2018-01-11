import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BitcoinHistory from 'react-bitcoin-history';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello, Sam</h1>
        </header>
        <p className="App-intro">
          <h2>Address: 1EzwoHtiXB4iFwedPr49iywjZn2nnekhoj</h2>
          <BitcoinHistory address="1EzwoHtiXB4iFwedPr49iywjZn2nnekhoj" />
        </p>
      </div>
    );
  }
}

export default App;
