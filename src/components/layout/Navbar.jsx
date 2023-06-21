import React from "react";
import { BsSearch, BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav
      className={`fixed left-0 right-0 top-0 py-4 px-2 xs:px-10 md:px-20  flex items-center justify-between gap-2  z-10  `}
    >
      <div className="text-3xl text-yellow-500 font-secondary">Webuzz</div>
      <div className="flex gap-10 pe-5 items-center">
        <label
          className={` border border-black rounded-full flex items-center gap-3 py-2 px-4  w-80`}
        >
          <BsSearch />
          <input
            type="search"
            placeholder="Search"
            className="outline-none bg-transparent text-sm"
          />
        </label>
        <button
          className={`text-xl shadow-sm text-black border border-black
            "bg-sky-300 shadow-light"
             
            p-3 rounded-full `}
        >
          <BsFillMoonStarsFill />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
