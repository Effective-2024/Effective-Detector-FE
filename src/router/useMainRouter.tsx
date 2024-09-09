import Layout from '@components/Layout/Layout';
import Home from '@pages/Home/Home';
import Login from '@pages/Login/Login';
import NotFound from '@pages/NotFound/NotFound';
import SignUp from '@pages/SignUp/SignUp';
import { useRoutes } from 'react-router-dom';
import MyPage from '~/pages/MyPage/MyPage';
import PrivateRoute from './PrivateRoute';

const useMainRouter = () =>
  useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: '*', element: <NotFound /> },
        {
          path: 'login',
          element: <PrivateRoute element={<Login />} redirectTo="/" />,
        },
        {
          path: 'sign-up',
          element: <PrivateRoute element={<SignUp />} redirectTo="/" />,
        },
        { path: 'my', element: <MyPage /> },
      ],
    },
  ]);

export default useMainRouter;
