import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode'
import {Link, Route} from 'react-router-dom'
import {NewPage} from '../components/NewPage'

const Navbar = () => {
  const [darkMode, toggleMode] = useDarkMode('')
  // const toggleMode = e => {
  //   e.preventDefault();
  //   setDarkMode(!darkMode);
  // };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <Link to="/newpage">New Page</Link>
      
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
