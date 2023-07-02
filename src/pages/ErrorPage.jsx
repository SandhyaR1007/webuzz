import React from "react";
import pagenotfound from "../assets/pagenotfound.png";
const ErrorPage = () => {
  return (
    <div className="h-screen overflow-hidden  flex items-center justify-center bg-[--bg-color]">
      <img
        src={pagenotfound}
        alt="pagenotfound"
        className="w-56 h-56 object-contain"
      />
    </div>
  );
};

export default ErrorPage;
