import React from "react";

const NoPosts = () => {
  return (
    <div className="h-[60vh]  flex items-center justify-center">
      <h1 className="font-secondary text-2xl xs:text-4xl md:text-6xl capitalize text-gray-500/30">
        No Posts to Show
      </h1>
    </div>
  );
};

export default NoPosts;
