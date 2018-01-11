import React, { Component } from 'react';
import Header from './header';
import BitcoinHistory from 'react-bitcoin-history';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>React simple starter</div>
        {/* <BitcoinHistory /> */}
      </div>
    );
  }
}
