import React from "react";

import SuggestedUsersList from "./SuggestedUsersList";

const SuggestedUsers = () => {
  return (
    <div className="hidden border border-gray-700 lg:block fixed w-[300px]  right-0  me-1 top-20  max-h-[80vh]  pb-10   px-5 rounded-lg overflow-y-scroll bg-[--card-bg] text-[--primary-text]">
      <h1 className="text-xl  py-5 font-secondary">Who to follow</h1>
      <div className="flex flex-col gap-6">
        <SuggestedUsersList />
      </div>
    </div>
  );
};

export default SuggestedUsers;
