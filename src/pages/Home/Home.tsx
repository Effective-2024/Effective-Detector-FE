import { useAppSelector } from '@lib/hooks/redux';
import DefaultHome from './DefaultHome';
import AdminHome from './AdminHome';
import ClientHome from './ClientHome';

const Home = () => {
  const member = useAppSelector((state) => state.member).value;
  return (
    <>
      {member.isAuth ? (
        member.isModerator ? (
          <AdminHome />
        ) : (
          <ClientHome />
        )
      ) : (
        <DefaultHome />
      )}
    </>
  );
};

export default Home;
