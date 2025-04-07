import React, { useState } from 'react';
//import './Header.css'; // Link to the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <nav className={`nav-links ${isMobile ? 'mobile' : ''}`}>
        <ul>
          <li>
            <FontAwesomeIcon icon={faHome} />
            <Link to="/">Home</Link>
          </li>
          <li><Link to="/Counter">Counter</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/Datafetch">Axios</Link></li>
        </ul>
      </nav>
      <div className="hamburger" onClick={() => setIsMobile(!isMobile)}>
        &#9776; 
      </div>
    </header>
  );
};

export default Header;