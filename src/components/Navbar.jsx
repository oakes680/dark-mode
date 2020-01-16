import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode'
import {Link} from 'react-router-dom'


const Navbar = ({darkMode, setDarkMode}) => {
  // const [darkMode, setDarkMode] = useDarkMode('')
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
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
