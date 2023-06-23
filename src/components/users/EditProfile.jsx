import React, { useState } from "react";
import { editProfile } from "../../app/features/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../app/features/authSlice";

import axios from "axios";
const EditProfile = ({ userDetails, setShowModal }) => {
  const { encodedToken } = useSelector(authSelector);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(userDetails);
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(editProfile({ encodedToken, userData }));
    setTimeout(() => {
      setShowModal(false);
    }, 200);
  };

  const uploadImage = async (file) => {
    console.log({ file });
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_API_KEY); // Replace with your upload preset name

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/your_cloud_name/image/upload", // Replace with your Cloudinary cloud name
        formData
      );

      // The uploaded image URL will be available in the response data
      const imageUrl = response.data.secure_url;

      // Do something with the image URL
      console.log(imageUrl);
    } catch (error) {
      // Handle the error
      console.log("Upload failed. Error:", error);
    }
  };

  return (
    <form
      className="flex flex-col py-3 px-5 gap-3 border border-gray-400 bg-purple-50 rounded-md"
      onSubmit={handleSubmit}
    >
      <label htmlFor="profile" className="flex flex-col items-center ">
        <img
          src={userData?.profile}
          alt="profile"
          className="h-28 w-28 object-cover rounded-full"
        />
      </label>

      <input
        type="file"
        name="profile"
        id="profile"
        className="hidden"
        onChange={(e) => uploadImage(e.target.files[0])}
      />
      <label className="flex flex-col gap-1">
        <span className="font-medium ">Bio</span>
        <textarea
          rows={4}
          name="bio"
          value={userData?.bio}
          className="w-full border border-gray-400 rounded-md p-1 outline-none"
          onChange={handleChange}
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="font-medium ">Portfolio</span>
        <input
          type="text"
          name="portfolio"
          value={userData?.portfolio}
          className="w-full border border-gray-400 rounded-md p-1"
          onChange={handleChange}
        />
      </label>
      <div className="flex gap-3">
        <button
          type="button"
          className="btn-light bg-green-300 px-5 py-1"
          onClick={() => setShowModal(false)}
        >
          Cancel
        </button>
        <button type="submit" className="btn-light bg-yellow px-5 py-1">
          Save
        </button>
      </div>
    </form>
  );
};

export default EditProfile;
