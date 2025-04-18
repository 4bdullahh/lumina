import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PaintBackground from './PaintBackground';

const Layout: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <PaintBackground />
      <Navbar />
      <main className="pt-20 pb-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;