import { getPostsByUsernameApi } from "./apiServices";

export const getPostsByUsername = async (token, username) => {
  try {
    const response = await getPostsByUsernameApi(token, username);

    if (response.status === 200) {
      return { success: true, data: response.data.posts };
    }
  } catch (err) {
    console.log({ err });
    return { success: false, err };
  }
};
