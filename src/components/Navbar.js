// Navbar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faCog, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons'; // Import the required icons
import './NavbarStyles.css'; // Import CSS for styling

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>ScreenPlay</h2>
      <div className="navbar-menu">
        <button className="nav-button" title="New chat">
          <FontAwesomeIcon icon={faCommentDots} />
        </button>
        <button className="nav-button" title="Settings">
          <FontAwesomeIcon icon={faCog} />
        </button>
        <button className="nav-button" title="Profile">
          <FontAwesomeIcon icon={faUser} />
        </button>
        <button className="nav-button" title="Logout">
          <FontAwesomeIcon icon={faSignOutAlt} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
