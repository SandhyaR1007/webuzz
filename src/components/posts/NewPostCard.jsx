import React, { useState } from "react";
import { BsCardImage, BsEmojiSmile } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { createNewPost } from "../../app/features/postsSlice";
import { authSelector } from "../../app/features/authSlice";
const NewPostCard = () => {
  const dispatch = useDispatch();
  const { encodedToken } = useSelector(authSelector);
  const [postData, setPostData] = useState({
    content: "",
    postMedia: "",
  });
  return (
    <div className="w-full p-5 border border-gray-400 rounded-md h-auto my-5 shadow-sm">
      <div className="flex items-start gap-4">
        <img
          src="https://pbs.twimg.com/media/FyjuLVNaAAA9vjA?format=jpg&name=900x900"
          alt="jk"
          className="w-10 h-10 rounded-lg border border-black"
        />
        <label className="w-full">
          <textarea
            value={postData.content}
            type="text"
            className="text-xl text-gray-400  w-full h-full outline-none"
            placeholder="What's on your mind?!"
            onChange={(e) =>
              setPostData({ ...postData, content: e.target.value })
            }
          />
        </label>
      </div>
      <div className=" pt-2 flex items-center justify-between mt-4">
        <div className="flex items-center gap-4">
          {/* <label> */}
          <span className="p-2 rounded-full hover:bg-purple-50 cursor-pointer">
            <BsCardImage className="text-xl text-purple-500" />
          </span>
          {/* </label> */}
          <input type="file" className="hidden" accept=".jpeg,.jpg,.png" />
          <span className="p-2 rounded-full hover:bg-emerald-50 cursor-pointer">
            <BsEmojiSmile className="text-xl text-emerald-500" />
          </span>
        </div>
        <button
          className={`bg-amber-300   px-5 py-0.5 rounded-full border border-black btn-shadow text-black`}
          onClick={() => {
            dispatch(createNewPost({ encodedToken, postData }));
            setPostData({
              content: "",
              postMedia: "",
            });
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default NewPostCard;
