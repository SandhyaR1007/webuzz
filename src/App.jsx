import React, { useEffect } from "react";
import "./styles/custom.styles.css";
import "./styles/themes.styles.css";
import "react-toastify/dist/ReactToastify.css";
import { Index as Routes } from "./routes/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, usersSelector } from "./app/features/usersSlice";
import { authSelector } from "./app/features/authSlice";

import { setDefaultTheme, themeSelector } from "./app/features/themeSlice";

const App = () => {
  const dispatch = useDispatch();
  const { encodedToken } = useSelector(authSelector);
  const { theme } = useSelector(themeSelector);

  useEffect(() => {
    if (encodedToken) dispatch(fetchUsers());
  }, [encodedToken]);
  useEffect(() => {
    dispatch(setDefaultTheme());
  }, []);

  return (
    <div>
      <Routes />
    </div>
  );
};

export default App;
