import React from "react";
import Navbar from "./Navbar";
import Menubar from "./Menubar";
import { Outlet } from "react-router";
import SuggestedUsers from "../users/SuggestedUsers";

const SharedLayout = () => {
  return (
    <div className="relative">
      <Navbar />
      <Menubar />
      <div className="border border-black mt-20 flex items-start  gap-3  md:ms-[21vw] px-10   w-full md:w-[75vw] lg:w-[52vw]">
        <Outlet />
      </div>
      <SuggestedUsers />
    </div>
  );
};

export default SharedLayout;
