import moment from "moment";

export const sortByLatest = (postsData) =>
  [...postsData].sort((a, b) => moment(b.createdAt) - moment(a.createdAt));

export const sortByOldest = (postsData) =>
  [...postsData].sort((a, b) => moment(a.createdAt) - moment(b.createdAt));

export const sortByTrending = (postsData) =>
  postsData.filter((data) => data.isTrending);
