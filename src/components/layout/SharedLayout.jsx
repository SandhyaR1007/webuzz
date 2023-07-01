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
        <div className="pb-20 lg:pb-3  flex flex-col items-start  gap-3 mx-0 sm:ms-[90px] md:ms-[250px] me-0 lg:me-[304px] px-3 sm:px-10 pt-3 min-h-screen   sm:w-[100%-110px] md:w-[100%-250px] lg:w-[calc(100%-555px)] bg-[--bg-color] overflow-x-hidden">
          <Outlet />
        </div>
        <SuggestedUsers />
      </div>
    </div>
  );
};

export default SharedLayout;
