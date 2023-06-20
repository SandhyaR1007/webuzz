import React from "react";

import PostCard from "./PostCard";

const PostList = ({ posts }) => {
  return (
    <div className="">
      {posts.map((post) => (
        <PostCard postData={post} key={post._id} />
      ))}
    </div>
  );
};

export default PostList;
