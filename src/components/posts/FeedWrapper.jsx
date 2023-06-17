import React from "react";
import SuggestedUsers from "../users/SuggestedUsers";
import { Outlet } from "react-router";

const FeedWrapper = () => {
  return (
    <>
      <div className="w-full lg:w-2/3  px-3">
        <Outlet />
      </div>
      <section className="relative hidden lg:block w-1/3  ">
        <SuggestedUsers />
      </section>
    </>
  );
};

export default FeedWrapper;
