import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AdminLayout;
