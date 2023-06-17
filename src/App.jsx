import React, { useEffect } from "react";
import "./custom.styles.css";
import { Index as Routes } from "./routes/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, usersSelector } from "./app/features/usersSlice";

const App = () => {
  const dispatch = useDispatch();
  const { usersData, currentUserId } = useSelector(usersSelector);
  console.log({ currentUserId });
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <Routes />
    </div>
  );
};

export default App;
