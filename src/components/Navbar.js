// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faCog, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons'; // Import the required icons
import './styles/NavbarStyles.css'; // Import CSS for styling

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>ScreenPlay</h2>
      <div className="navbar-menu">
        <Link to="/" className="nav-button" title="New chat">
          <FontAwesomeIcon icon={faCommentDots} />
        </Link>
        <Link to="/" className="nav-button" title="Settings">
          <FontAwesomeIcon icon={faCog} />
        </Link>
        <Link to="/" className="nav-button" title="Profile">
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link to="/" className="nav-button" title="Logout">
          <FontAwesomeIcon icon={faSignOutAlt} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
