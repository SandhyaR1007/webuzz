import { Route, Routes } from "react-router-dom";
import { privateRoutes } from "./allRoutes";
import { SharedLayout } from "../components";

const Index = () => {
  return (
    <>
      <Routes>
        <Route element={<SharedLayout />}>
          {privateRoutes.map((data, idx) => (
            <Route key={idx} path={data.path} element={data.element} />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export { Index };
