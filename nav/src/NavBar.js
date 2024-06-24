import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">MySite</div>
        <button className="navbar-toggle" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </button>
      </div>
      <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;
