import React from "react";
import { AiOutlineHeart, AiOutlineShareAlt, AiFillHeart } from "react-icons/ai";
import { VscComment } from "react-icons/vsc";
import { CiBookmark } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { dislikePost, likePost } from "../../app/features/postsSlice";
import { authSelector } from "../../app/features/authSlice";

const PostCard = ({ postData }) => {
  const dispatch = useDispatch();
  const {
    encodedToken,
    foundUser: { _id },
  } = useSelector(authSelector);
  const likedByUser = postData?.likes?.likedBy?.find(
    (data) => data._id === _id
  );

  return (
    <div className="p-5 border border-black mb-2 rounded-md bg-amber-50">
      <header className="flex gap-2 items-center">
        <h1 className="text-lg font-semibold">
          {postData.firstName} {postData.lastName}
        </h1>
        <span className="text-sm text-gray-400">@{postData.userhandle}</span>
      </header>
      <main>
        <p>{postData.content}</p>
        <section className="py-2 ">
          {postData.postMedia.length > 0 &&
            (postData.postMedia.includes("mp4") ? (
              <video src={postData.postMedia} alt="" className="rounded-xl" />
            ) : (
              <img src={postData.postMedia} className="rounded-xl" alt="" />
            ))}
        </section>
      </main>
      <footer className="flex pt-4 items-center gap-10">
        <button
          className="flex items-center gap-2"
          onClick={() => {
            console.log("vliked", postData._id);
            if (likedByUser) {
              dispatch(
                dislikePost({ token: encodedToken, postId: postData._id })
              );
            } else {
              dispatch(likePost({ token: encodedToken, postId: postData._id }));
            }
          }}
        >
          {likedByUser ? (
            <AiFillHeart className="text-xl text-red-600" />
          ) : (
            <AiOutlineHeart className="text-xl" />
          )}
          <span>
            {postData?.likes?.likeCount > 0 && postData?.likes?.likeCount}
          </span>
        </button>
        <button className="flex items-center gap-2">
          <VscComment className="text-xl" />
          {postData?.comments?.length > 0 && postData?.comments?.length}
        </button>
        <button>
          <CiBookmark className="text-xl" />
        </button>
        <button>
          <AiOutlineShareAlt className="text-xl" />
        </button>
      </footer>
    </div>
  );
};

export default PostCard;
