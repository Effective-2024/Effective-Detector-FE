import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@components/Layout/Header/Header';
import Footer from '@components/Layout/Footer/Footer';
import Container from '@components/Layout/Container/Container';

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default AdminLayout;
