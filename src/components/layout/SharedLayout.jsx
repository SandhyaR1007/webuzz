import React from "react";
import Navbar from "./Navbar";
import Menubar from "./Menubar";
import { Outlet } from "react-router";
import SuggestedUsers from "../users/SuggestedUsers";

const SharedLayout = () => {
  return (
    <div className="relative bg-[--bg-color]">
      <Navbar />
      <div className="mt-16">
        <Menubar />
        <div className="border border-black flex items-start  gap-3 mx-0 sm:ms-[20vw] lg:ms-[20vw] lg:me-[27vw] xs:px-10 min-h-screen  w-full sm:w-[80vw] lg:w-[53vw] bg-[--bg-color]">
          <Outlet />
        </div>
        <SuggestedUsers />
      </div>
    </div>
  );
};

export default SharedLayout;
