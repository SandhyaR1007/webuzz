import React, { useState } from "react";
import { BsSearch, BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Search from "../filters/Search";

const Navbar = () => {
  const [theme, setTheme] = useState(false);
  const dispatch = useDispatch();

  return (
    <nav className="fixed left-0 right-0 top-0 py-4 px-2 xs:px-10 md:px-20  flex items-center justify-between gap-2  z-2  bg-[--card-bg] text-[--primary-text] h-16 shadow-md">
      <div className="text-3xl text-yellow-500 font-secondary">Webuzz</div>
      <Search />
      <div className="flex sm:gap-10 sm:pe-5 items-center">
        <button
          className={`hidden sm:block text-xl shadow-sm text-[--primary-text] border border-black
            "bg-sky-300 shadow-light"
             
            p-3 rounded-full `}
          onClick={() => {
            const root = document.getElementById("root");
            if (theme) {
              root.setAttribute("class", "light-theme");
            } else {
              root.setAttribute("class", "dark-theme");
            }
            setTheme(!theme);
          }}
        >
          <BsFillMoonStarsFill />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
