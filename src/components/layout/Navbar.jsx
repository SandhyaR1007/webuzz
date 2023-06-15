import React from "react";
import { BsSearch } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 py-4 px-2 xs:px-10 md:px-20  flex items-center justify-between gap-2 bg-white z-10  ">
      <div className="text-3xl text-[--green-color] font-secondary">Webuzz</div>
      <div className="flex gap-10 pe-5 items-center">
        <label className=" border border-black rounded-full flex items-center gap-3 py-2 px-4  w-80">
          <BsSearch />
          <input
            type="search"
            placeholder="Search"
            className="outline-none bg-transparent text-sm"
          />
        </label>
        <button className="text-xl shadow-sm bg-emerald-50 p-3 rounded-full">
          <FaSun />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
