import { getPostByIdService, getPostsByUsernameService } from "./apiServices";

export const getPostsByUsername = async (token, username) => {
  try {
    const response = await getPostsByUsernameService(token, username);

    if (response.status === 200) {
      return { success: true, data: response.data.posts };
    }
  } catch (err) {
    console.log({ err });
    return { success: false, err };
  }
};
export const getPostById = async (postId) => {
  try {
    const response = await getPostByIdService(postId);
    console.log(response);
    if (response.status === 200) {
      return { success: true, data: response.data.post };
    }
  } catch (err) {
    console.log({ err });
    return { success: false, err };
  }
};
