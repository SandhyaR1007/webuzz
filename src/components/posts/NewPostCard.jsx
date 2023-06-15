import React from "react";
import { BsCardImage, BsEmojiSmile } from "react-icons/bs";
const NewPostCard = () => {
  return (
    <div className="w-full p-5 border border-black mb-2 rounded-md h-auto">
      <div className="flex items-start gap-4">
        <img
          src="https://pbs.twimg.com/media/FyjuLVNaAAA9vjA?format=jpg&name=900x900"
          alt="jk"
          className="w-10 h-10 rounded-lg border border-black"
        />
        <label className="w-full">
          <textarea
            type="text"
            className="text-xl text-gray-400  w-full h-full outline-none"
            placeholder="What's on your mind?!"
          />
        </label>
      </div>
      <div className="border-t pt-2 flex items-center justify-between mt-4">
        <div className="flex items-center gap-5">
          <label>
            <BsCardImage className="text-xl" />
            <input type="file" className="hidden" accept=".jpeg,.jpg,.png" />
          </label>
          <BsEmojiSmile className="text-xl" />
        </div>
        <button
          className={`bg-[--blue-color]   px-5 py-0.5 rounded-full border border-black`}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default NewPostCard;
