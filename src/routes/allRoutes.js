import { Login, Signup } from "../pages";
import Home from "../pages/Home";

const privateRoutes = [
  {
    path: "/",
    element: <Home />,
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

export { privateRoutes, publicRoutes };
