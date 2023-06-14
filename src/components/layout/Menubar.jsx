import React from "react";
import { AiFillHome, AiFillCompass } from "react-icons/ai";
import { BiUserCircle, BiLogOut } from "react-icons/bi";
import { CiBookmark } from "react-icons/ci";

const Menubar = () => {
  return (
    <ul className="shadow-md fixed bottom-0 xs:top-[4.75rem] flex  xs:flex-col justify-between xs:justify-start gap-0 xs:gap-10   py-5 px-3 xs:ps-2 border xs:border-0 w-full xs:w-auto bg-white ">
      <li className="flex items-center gap-2 ">
        <AiFillHome className="text-2xl" />
        <span className="hidden sm:block">Home</span>
      </li>
      <li className="flex items-center gap-2">
        {" "}
        <AiFillCompass className="text-2xl" />
        <span className="hidden sm:block">Explore</span>
      </li>
      <li className="flex items-center gap-2">
        {" "}
        <CiBookmark className="text-2xl" />
        <span className="hidden sm:block">Bookmark</span>
      </li>
      <li className="flex items-center gap-2">
        {" "}
        <BiUserCircle className="text-2xl" />
        <span className="hidden sm:block">Profile</span>
      </li>
      <li className="flex items-center gap-2">
        {" "}
        <BiLogOut className="text-2xl" />
        <span className="hidden sm:block">Logout</span>
      </li>
    </ul>
  );
};

export default Menubar;
