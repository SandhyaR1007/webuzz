import { Route, Routes } from "react-router-dom";
import { contentRoutes, privateRoutes, publicRoutes } from "./allRoutes";
import { FeedWrapper } from "../components";
import RequiresAuth from "./RequiresAuth";

const Index = () => {
  return (
    <>
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
