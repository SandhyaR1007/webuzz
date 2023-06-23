const useMedia = () => {
  const uploadImage = async (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append(
      "upload_preset",
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    );
    data.append("cloud_name", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
    data.append("folder", "webuzz_uploads");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const res = await response.json();
      console.log({ res });
      return { success: true, res };
    } catch (error) {
      console.log({ error });
      return { success: false, error };
    }
  };
  return { uploadImage };
};

export { useMedia };
