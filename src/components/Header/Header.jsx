// Header.js
import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="banner">
        <img src="./src/assets/banner.jpg" alt="Banner Image" /> {/* Replace with your image path */}
        <div className="banner-content">
          <h1>Mentor-Mentee</h1>
          <p>Connecting you with the right guidance.</p>
          <button>Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
