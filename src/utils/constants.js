import moment from "moment";

export const avatars = [
  "https://res.cloudinary.com/dwdcib0hv/image/upload/v1687851183/avatars/vwhq4ge03qcntofpfppp.png",
  "https://res.cloudinary.com/dwdcib0hv/image/upload/v1687851182/avatars/trapmosse2treey1m9db.png",
  "https://res.cloudinary.com/dwdcib0hv/image/upload/v1687851182/avatars/yju5lmlw1p4fgjjyxhi9.png",
  "https://res.cloudinary.com/dwdcib0hv/image/upload/v1687851182/avatars/pbesat0slyx3hqloxcnq.png",
  "https://res.cloudinary.com/dwdcib0hv/image/upload/v1687851182/avatars/m1ryaztaohti1j2jkqum.png",
  "https://res.cloudinary.com/dwdcib0hv/image/upload/v1687851181/avatars/q4znkd8ze0sopzh8eqvb.png",
  "https://res.cloudinary.com/dwdcib0hv/image/upload/v1687851182/avatars/twh5nnmnw4z0seefijej.png",
];
export const formatTimestamp = (timestamp) => {
  const now = moment();
  const targetDate = moment(timestamp);

  if (now.diff(targetDate, "hours") < 24) {
    return targetDate.fromNow();
  } else {
    return targetDate.format("Do MMMM, YYYY");
  }
};
