import React, { useEffect } from "react";
import "./styles/custom.styles.css";
import { Index as Routes } from "./routes/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, usersSelector } from "./app/features/usersSlice";
import { authSelector } from "./app/features/authSlice";

const App = () => {
  const dispatch = useDispatch();
  const { encodedToken } = useSelector(authSelector);

  useEffect(() => {
    if (encodedToken) dispatch(fetchUsers());
  }, [encodedToken]);
  return (
    <div>
      <Routes />
    </div>
  );
};

export default App;
