// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom'; // If you're using react-router-dom for navigation

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}

export default NavigationBar;
