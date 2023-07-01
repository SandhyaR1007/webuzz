import moment from "moment";

export const formatTimestamp = (timestamp) => {
  const now = moment();
  const targetDate = moment(timestamp);

  if (now.diff(targetDate, "hours") < 24) {
    return targetDate.fromNow();
  } else {
    return targetDate.format("Do MMMM, YYYY");
  }
};

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const truncateWithEllipses = (str) =>
  str.length > 20 ? `${str.slice(0, 20)}...` : str;
