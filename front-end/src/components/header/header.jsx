import React from 'react';
import './header.css';

const Header = () => (
  <header className="header">
    <nav>
      <ul className="nav">
        <li><a href='/'>Page1</a></li>
        <li><a href='/page2'>Page2</a></li>
        <li><a href='/page3'>Page3</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
