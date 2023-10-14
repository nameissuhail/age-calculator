import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="navbar">
        <Link to="/" className="logo">Syed Suhail</Link>
        <ul className="nav-links">
          <li><Link to="/">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      

    </div>
  );
};

export default Header;
