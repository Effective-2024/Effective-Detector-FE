import { useRoutes } from 'react-router-dom';
import Home from '@pages/Home/Home';
import Login from '@pages/Login/Login';
import NotFound from '@pages/NotFound/NotFound';
import Layout from '@components/Layout/Layout';
import SignUp from '@pages/SignUp/SignUp';

const useMainRouter = () =>
  useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: '*', element: <NotFound /> },
        { path: 'login', element: <Login /> },
        { path: 'sign-up', element: <SignUp /> },
      ],
    },
  ]);

export default useMainRouter;
