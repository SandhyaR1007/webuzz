import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addComment, postsSelector } from "../app/features/postsSlice";
import { useParams } from "react-router-dom";
import { getPostsFromIds } from "../utils/postsHelper";

import PostCard from "../components/posts/PostCard";
import { CommentCard } from "../components";

const PostDetails = () => {
  const userInfo = localStorage.getItem("foundUser")
    ? JSON.parse(localStorage.getItem("foundUser"))
    : {};
  const [newComment, setNewComment] = useState({
    _id: uuid(),
    comment: "",
    username: userInfo?.username,
    createdAt: new Date(),
    firstName: userInfo?.firstName,
    lastName: userInfo?.lastName,
    profile: userInfo?.profile,
  });

  const { postId } = useParams();

  const { postsData } = useSelector(postsSelector);
  const postInfo = getPostsFromIds(postsData, [postId]);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>PostDetails</h1>
      {postId && <PostCard postData={postInfo[0]} noBorder={true} />}
      <div className="">
        <label className="border-y my-2 flex items-center gap-2 ">
          <input
            type="text"
            placeholder="Add a comment..."
            className="w-full  outline-none p-2.5 border-none bg-transparent text-[--primary-text] "
            name="comment"
            value={newComment.comment}
            onChange={(e) =>
              setNewComment({ ...newComment, comment: e.target.value })
            }
          />
          <button
            disabled={newComment?.comment?.trim().length === 0}
            className="hover:bg-purple-500/10 disabled:hover:bg-none py-1 px-3 rounded-md text-purple-500 font-semibold disabled:text-slate-100 transition "
            onClick={() => {
              dispatch(addComment({ newComment, _id: postInfo[0]?._id }));
              setNewComment({ ...newComment, comment: "" });
            }}
          >
            Post
          </button>
        </label>
        <section>
          {postInfo[0] &&
            postInfo[0]?.comments?.map((data) => (
              <CommentCard
                postId={postInfo[0]._id}
                comment={data}
                currentUsername={userInfo?.username}
              />
            ))}
        </section>
      </div>
    </div>
  );
};

export default PostDetails;
