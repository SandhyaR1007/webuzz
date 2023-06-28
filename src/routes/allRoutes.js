import {
  Bookmarks,
  Explore,
  Login,
  PostDetails,
  Signup,
  UserProfile,
} from "../pages";
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
    path: "/bookmarks",
    element: <Bookmarks />,
  },
  {
    path: "/userProfile/:username",
    element: <UserProfile />,
  },
  {
    path: "/post/:postId",
    element: <PostDetails />,
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
