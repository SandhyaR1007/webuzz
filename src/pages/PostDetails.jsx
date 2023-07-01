import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { commentOnPost, postsSelector } from "../app/features/postsSlice";
import { useParams } from "react-router-dom";

import PostCard from "../components/posts/PostCard";
import { CommentCard, Loader } from "../components";
import { getPostById } from "../services/apiHelper";
import { authSelector } from "../app/features/authSlice";

const PostDetails = () => {
  const { encodedToken } = useSelector(authSelector);
  const {
    postsData,
    disabled: { commentDisabled },
  } = useSelector(postsSelector);

  const [postInfo, setPostInfo] = useState(null);
  const [loading, setLoading] = useState(false);
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

  const dispatch = useDispatch();
  const commentHandler = () => {
    const updatedData = {
      ...postInfo,
      comments: [...postInfo.comments, newComment],
    };

    dispatch(commentOnPost({ encodedToken, postData: updatedData }));
  };
  useEffect(() => {
    if (postId) {
      setLoading(true);
      getPostById(postId).then((res) => {
        if (res?.success) {
          setPostInfo(res.data);
        } else {
          console.log(res.err);
        }
        setLoading(false);
      });
    }
  }, [postId]);
  useEffect(() => {
    if (postId) {
      getPostById(postId).then((res) => {
        if (res?.success) {
          setPostInfo(res.data);
        } else {
          console.log(res.err);
        }
      });
    }
  }, [postsData]);

  return (
    <div>
      {loading ? (
        <div className="text-center">
          <Loader />
        </div>
      ) : (
        <>
          {postInfo && <PostCard postData={postInfo} noBorder={true} />}
          <div className="">
            <label className="border-y border-[--border-color] my-2 flex items-center gap-2 ">
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
                disabled={
                  newComment?.comment?.trim()?.length === 0 || commentDisabled
                }
                className="hover:bg-purple-500/10 disabled:hover:bg-none py-1 px-3 rounded-md text-purple-500 font-semibold disabled:text-slate-100 transition "
                onClick={() => {
                  commentHandler();
                  setNewComment({ ...newComment, comment: "" });
                }}
              >
                Post
              </button>
            </label>
            <section>
              {postInfo &&
                postInfo?.comments?.map((data) => (
                  <CommentCard
                    postData={postInfo}
                    comment={data}
                    currentUsername={userInfo?.username}
                    commentDisabled={commentDisabled}
                  />
                ))}
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default PostDetails;
