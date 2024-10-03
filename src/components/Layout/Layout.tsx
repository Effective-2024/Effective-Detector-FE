import { Outlet } from 'react-router-dom';

import Container from '@components/Layout/Container/Container';
import Footer from '@components/Layout/Footer/Footer';
import Header from '@components/Layout/Header/Header';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAppSelector } from '~/lib/hooks/redux';
import { useUnprocessedAccidentQuery } from '~/lib/hooks/useApi';

const Layout = () => {
  const hospitalId = useAppSelector((state) => state.member).value.memberId;
  const { data: unprocessedAccidents } =
    useUnprocessedAccidentQuery(hospitalId);
  useEffect(() => {
    unprocessedAccidents?.forEach((accident) =>
      toast.info(`${accident.camera.content}`),
    );
  }, []);

  return (
    <div>
      <Button onClick={() => console.log('aaa')} className="fixed left-0 top-0">
        도착
      </Button>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
