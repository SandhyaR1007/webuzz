import { Explore, Login, Signup, UserProfile } from "../pages";
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
  {
    path: "/userProfile/:username",
    element: <UserProfile />,
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
