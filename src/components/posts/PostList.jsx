import React from "react";
import { v4 as uuid } from "uuid";
import PostCard from "./PostCard";
import { posts } from "../../data";

const PostList = () => {
  return (
    <div className="px-3">
      {posts.map((post) => (
        <PostCard postData={post} id={post._id} />
      ))}
    </div>
  );
};

export default PostList;
