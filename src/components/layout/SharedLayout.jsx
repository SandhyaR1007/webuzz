import React from "react";
import Navbar from "./Navbar";
import Menubar from "./Menubar";

import SuggestedUsers from "../users/SuggestedUsers";
import PostList from "../posts/PostList";
import NewPostCard from "../posts/NewPostCard";
import Filters from "../filters/Filters";

const SharedLayout = () => {
  return (
    <div className="relative  xs:px-10 md:px-20">
      <Navbar />
      <Menubar />
      <div className="mt-20  xs:ms-12 md:ms-40 flex items-start justify-between gap-3 ">
        <section className="w-full lg:w-2/3  px-3">
          <Filters />
          <NewPostCard />
          <PostList />
        </section>

        <section className="relative hidden lg:block w-1/3  ">
          <SuggestedUsers />
        </section>
      </div>
    </div>
  );
};

export default SharedLayout;
