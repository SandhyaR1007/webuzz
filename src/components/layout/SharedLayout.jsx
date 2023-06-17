import React from "react";
import Navbar from "./Navbar";
import Menubar from "./Menubar";
import { Outlet } from "react-router";

const SharedLayout = () => {
  return (
    <div className="relative  xs:px-10 md:px-20">
      <Navbar />
      <Menubar />
      <div className="mt-20  xs:ms-12 md:ms-40 flex items-start justify-between gap-3 ">
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;
