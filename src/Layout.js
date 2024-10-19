// src/components/Layout.js

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './components/styles/LayoutStyles.css';

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout-content">
        <Sidebar />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;