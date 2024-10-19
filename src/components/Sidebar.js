// Sidebar.js
import React from 'react';
import './SidebarStyles.css'; // Import CSS for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Scenes</h3>
      <ul>
        {[1, 2, 3, 4, 5].map((num) => (
          <li key={num}>
            <span className="icon">🎬</span> Scene {num}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
