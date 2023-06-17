import React from "react";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { VscComment } from "react-icons/vsc";
import { CiBookmark } from "react-icons/ci";

const PostCard = ({ postData }) => {
  return (
    <div className="p-5 border border-black mb-2 rounded-md bg-amber-50">
      <header className="flex gap-2 items-center">
        <h1 className="text-lg font-semibold">
          {postData.firstName} {postData.lastName}
        </h1>
        <span className="text-sm text-gray-400">@{postData.username}</span>
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
        <AiOutlineHeart className="text-xl" />
        <VscComment className="text-xl" />
        <CiBookmark className="text-xl" />
        <AiOutlineShareAlt className="text-xl" />
      </footer>
    </div>
  );
};

export default PostCard;
