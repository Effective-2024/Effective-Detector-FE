import { Outlet } from 'react-router-dom';

import Container from '@components/Layout/Container/Container';
import Footer from '@components/Layout/Footer/Footer';
import Header from '@components/Layout/Header/Header';
import { useAppSelector } from '~/lib/hooks/redux';
import AccidentAlarm from './AccidentAlarm/AccidentAlarm';

const Layout = () => {
  const isAuth = useAppSelector((state) => state.member.value).isAuth;
  return (
    <div>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
      {isAuth && <AccidentAlarm />}
    </div>
  );
};

export default Layout;
