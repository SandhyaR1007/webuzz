import { toast } from "react-toastify";

export const notify = (message, success) => {
  console.log({ message });
  if (success) {
    toast.success(message);
  } else {
    toast.error(message);
  }
};
