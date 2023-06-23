import React, { useState } from "react";
import { editProfile } from "../../app/features/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../app/features/authSlice";

import { useMedia } from "../../hooks/useMedia";
const EditProfile = ({ userDetails, setShowModal }) => {
  const { encodedToken } = useSelector(authSelector);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(userDetails);
  const [uploading, setUploading] = useState(false);
  const { uploadImage } = useMedia();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const [preview, setPreview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ userData });
    dispatch(editProfile({ encodedToken, userData }));
    setTimeout(() => {
      setShowModal(false);
    }, 200);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    uploadImage(file).then((response) => {
      if (response.success) {
        setUserData({ ...userData, profile: response.res.secure_url });
      }
    });

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setPreview(reader.result);
    };
  };

  return (
    <form
      className="flex flex-col py-3 px-5 gap-3 border border-gray-400 bg-purple-50 rounded-md"
      onSubmit={handleSubmit}
    >
      <label htmlFor="profile" className="flex flex-col items-center ">
        {uploading ? (
          <span className="h-28 w-28 object-cover rounded-full">uploading</span>
        ) : (
          <img
            src={preview ?? userData?.profile}
            alt="profile"
            className="h-28 w-28 object-cover rounded-full"
          />
        )}
      </label>

      <input
        type="file"
        name="profile"
        id="profile"
        className="hidden"
        onChange={handleImageChange}
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
