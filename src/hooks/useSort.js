const useSort = () => {
  const sortByLatest = (data) =>
    [...data].sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt));

  const sortByTrending = (data) =>
    [...data].sort((a, b) => b?.likes?.likeCount - a?.likes?.likeCount);

  return { sortByLatest, sortByTrending };
};

export { useSort };
