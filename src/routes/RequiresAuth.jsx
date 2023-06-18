import React from "react";
import { authSelector } from "../app/features/authSlice";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { SharedLayout } from "../components";

const RequiresAuth = () => {
  const { encodedToken } = useSelector(authSelector);
  return (
    <>
      {encodedToken ? (
        <SharedLayout>
          <Outlet />
        </SharedLayout>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default RequiresAuth;
