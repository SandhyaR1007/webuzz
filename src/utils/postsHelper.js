export const getIsPostLiked = (postData, postId) =>
  postData?.likes?.likedBy?.find((data) => data._id === postId);

export const getIsPostBookmarked = (usersData, postId, userId) => {
  return usersData
    .find((data) => data._id === userId)
    ?.bookmarks?.find((data) => data === postId);
};
