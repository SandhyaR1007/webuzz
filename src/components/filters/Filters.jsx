import React from "react";

const Filters = () => {
  return (
    <div className="grid grid-cols-2 pb-2">
      <button className="bg-gray-100 p-3">Latest</button>
      <button className=" p-3">Trending</button>
    </div>
  );
};

export default Filters;
