import React from "react";

const Filters = ({ sortBy, setSortBy }) => {
  const handleClick = (e) => setSortBy(e.target.name);
  const btns = ["latest", "trending"];
  return (
    <div className="grid grid-cols-2 pb-2">
      {btns.map((btnName) => (
        <button
          key={btnName}
          className={`${
            sortBy == btnName ? "bg-gray-500/10" : ""
          } p-3 capitalize transition text-[--primary-text]`}
          name={btnName}
          onClick={handleClick}
        >
          {btnName}
        </button>
      ))}
    </div>
  );
};

export default Filters;
