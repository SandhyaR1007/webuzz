import moment from "moment";

export const sortByLatest = (postsData) =>
  [...postsData].sort((a, b) => moment(b.updatedAt) - moment(a.updatedAt));

export const sortByOldest = (postsData) =>
  [...postsData].sort((a, b) => moment(a.updatedAt) - moment(b.updatedAt));

export const sortByTrending = (postsData) =>
  postsData.filter((data) => data.isTrending);
