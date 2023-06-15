import React from "react";
import { AiOutlineHome, AiOutlineCompass } from "react-icons/ai";
import { BiUserCircle, BiLogOut } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";

const Menubar = () => {
  return (
    <ul className=" fixed bottom-0 xs:top-[4.75rem] flex  xs:flex-col justify-between xs:justify-start gap-0 xs:gap-10   py-5 px-3 xs:px-4 border xs:border-0 w-full xs:w-40  ">
      <li className="flex items-center gap-4 border border-black rounded-full py-1 btn-shadow bg-[--blue-color] px-3">
        <AiOutlineHome className="text-2xl" />
        <span className="hidden sm:block">Home</span>
      </li>
      <li className="flex items-center gap-4 border border-black rounded-full py-1 btn-shadow bg-[--pink-color] px-3">
        {" "}
        <AiOutlineCompass className="text-2xl" />
        <span className="hidden sm:block">Explore</span>
      </li>
      <li className="flex items-center gap-4 border border-black rounded-full py-1 btn-shadow bg-[--blue-color] px-3">
        {" "}
        <BsBookmark className="text-2xl " />
        <span className="hidden sm:block">Bookmark</span>
      </li>
      <li className="flex items-center gap-4 border border-black rounded-full py-1 btn-shadow bg-[--pink-color] px-3">
        {" "}
        <BiUserCircle className="text-2xl" />
        <span className="hidden sm:block">Profile</span>
      </li>
      <li className="flex items-center gap-4 border border-black rounded-full py-1 btn-shadow bg-[--blue-color] px-3">
        {" "}
        <BiLogOut className="text-2xl" />
        <span className="hidden sm:block">Logout</span>
      </li>
    </ul>
  );
};

export default Menubar;
