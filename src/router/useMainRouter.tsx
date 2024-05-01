import { useRoutes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import NotFound from "../pages/NotFound/NotFound";

const useMainRouter = () =>
  useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "*", element: <NotFound /> },
  ]);

export default useMainRouter;
