import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../app/features/authSlice";
import { editPost } from "../../app/features/postsSlice";

const EditPostCard = ({ postData, setIsEditPost }) => {
  const dispatch = useDispatch();
  const { encodedToken } = useSelector(authSelector);
  const [postText, setPostText] = useState(postData.content);
  const editPostHandler = () => {
    const updatedData = { ...postData, content: postText };
    console.log({ updatedData });
    dispatch(editPost({ encodedToken, postData: updatedData }));
    setIsEditPost(false);
  };
  return (
    <div className="w-full p-5 border border-gray-400 rounded-md h-auto my-5 shadow-sm">
      <div className="flex items-start gap-4">
        <label className="w-full">
          <textarea
            value={postText}
            type="text"
            className=" w-full h-full outline-none bg-transparent"
            onChange={(e) => setPostText(e.target.value)}
            required
          >
            {postText}
          </textarea>
        </label>
      </div>
      <div className=" pt-2 flex items-center justify-end gap-3 mt-4">
        <button
          className={`bg-blue-300   px-5 py-0.5 rounded-full btn-light`}
          onClick={() => setIsEditPost(false)}
        >
          Cancel
        </button>
        <button
          className={`bg-yellow-300   px-5 py-0.5 rounded-full btn-light`}
          onClick={() => {
            editPostHandler();
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditPostCard;
