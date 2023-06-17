import { Route, Routes } from "react-router-dom";
import { contentRoutes, privateRoutes } from "./allRoutes";
import { FeedWrapper, SharedLayout } from "../components";

const Index = () => {
  return (
    <>
      <Routes>
        <Route element={<SharedLayout />}>
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
