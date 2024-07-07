import { useRoutes } from 'react-router-dom';
import Home from '@pages/Home/Home';
import About from '@pages/About/About';
import NotFound from '@pages/NotFound/NotFound';
import AdminLayout from '@components/Layout/AdminLayout';

const useMainRouter = () =>
  useRoutes([
    {
      path: '/admin',
      element: <AdminLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: '*', element: <NotFound /> },
        { path: 'about', element: <About /> },
      ],
    },
  ]);

export default useMainRouter;
