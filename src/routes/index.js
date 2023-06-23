import { Route, Routes } from "react-router-dom";
import { contentRoutes, privateRoutes, publicRoutes } from "./allRoutes";
import { FeedWrapper } from "../components";
import RequiresAuth from "./RequiresAuth";
import { ToastContainer } from "react-toastify";

const Index = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        {publicRoutes.map((data, idx) => (
          <Route key={idx} path={data.path} element={data.element} />
        ))}
        <Route element={<RequiresAuth />}>
          {privateRoutes.map((data, idx) => (
            <Route key={idx} path={data.path} element={data.element} />
          ))}
          <Route element={<FeedWrapper />}>
            {contentRoutes.map((data, idx) => (
              <Route key={idx} path={data.path} element={data.element} />
            ))}
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export { Index };
