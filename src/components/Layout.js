// src/components/Layout.js

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './styles/LayoutStyles.css';

const Layout = () => {
  return (
    <div className="nav-container">
      <Navbar />
      <div className="side-content">
        <Sidebar />
        <main className="other-content-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
