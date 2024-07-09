import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@components/Layout/Header/Header';
import Footer from '@components/Layout/Footer/Footer';
import Container from '@components/Layout/Container/Container';

const Layout = () => {
  return (
    <div>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
