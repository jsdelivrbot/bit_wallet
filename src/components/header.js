import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="main-bar">
        <nav className="navbar main-bar">
          <Link to="/" className="navbar-brand bw-brand">BitWallet</Link>
        </nav>
      </div>
    ); 
  }
}

export default Header;