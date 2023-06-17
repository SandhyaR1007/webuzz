import { Explore, Login, Signup } from "../pages";
import Home from "../pages/Home";

const contentRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
];
const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
];
const privateRoutes = [];

export { contentRoutes, publicRoutes, privateRoutes };
