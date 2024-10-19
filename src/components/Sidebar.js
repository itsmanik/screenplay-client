// Sidebar.js
import React from 'react';
import './styles/SidebarStyles.css'; // Import CSS for styling
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Scenes</h3>
      <ul>
        {[1, 2, 3, 4, 5].map((num) => (
          <li key={num}>
            <Link to={`/scene/${num}`}>
              <span className="icon">🎬</span> Scene {num}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
