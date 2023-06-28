export const getIsPostLiked = (postData, username) =>
  postData?.likes?.likedBy?.find((data) => data.username === username);

export const getIsPostBookmarked = (usersData, postId, username) => {
  return usersData
    .find((data) => data.username === username)
    ?.bookmarks?.find((data) => data === postId);
};

export const getUserByUsername = (usersData, username) =>
  usersData?.find((data) => data.username === username);

export const getIsUserFollow = (currentUserId, usersData, username) => {
  return usersData
    .find((data) => data._id === currentUserId)
    ?.following?.find((data) => data.username === username);
};

export const getPostsFromIds = (postsData, postIdArr) => {
  return postsData.filter(({ _id }) => postIdArr.some((id) => id === _id));
};
