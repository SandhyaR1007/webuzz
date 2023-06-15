import React from "react";

const UsersCard = () => {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center gap-2">
        <img
          src="https://pbs.twimg.com/media/FyjuLVNaAAA9vjA?format=jpg&name=900x900"
          alt="jk"
          className="w-10 h-10 rounded-lg border border-black"
        />
        <div className="">
          <h1 className="font-semibold">Jeon Jungkook</h1>
          <h3 className="text-sm text-gray-500">@jungook.97</h3>
        </div>
      </div>
      <button
        className={`bg-[--pink-color]  text-sm px-3 py-0.5 rounded-full border border-black`}
      >
        Follow
      </button>
    </div>
  );
};
const arr = [1, 2, 3, 4, 5];
const SuggestedUsers = () => {
  return (
    <div className="fixed  max-h-screen w-80 pb-10 border border-black  px-5 rounded-lg">
      <h1 className="text-2xl  py-5 font-secondary">Who to follow</h1>
      <div className="flex flex-col gap-3">
        {arr.map((data) => (
          <UsersCard />
        ))}
      </div>
    </div>
  );
};

export default SuggestedUsers;
