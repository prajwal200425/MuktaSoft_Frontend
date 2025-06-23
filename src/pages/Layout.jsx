
import React from 'react';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
    
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
      
        <SideBar />

        <main className="flex-2 p-4 ml-8 bg-gray-100 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
