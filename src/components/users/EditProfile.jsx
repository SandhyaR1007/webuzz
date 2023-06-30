import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { editProfile } from "../../app/features/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../app/features/authSlice";

import { useMedia } from "../../hooks/useMedia";
import CustomDropdownMenu from "../common/CustomDropdownMenu";
import { avatars } from "../../utils/constants";
import Loader from "../common/Loader";
const EditProfile = ({ userDetails, setShowModal, editDisabled }) => {
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
    setUploading(true);
    const file = event.target.files[0];
    uploadImage(file).then((response) => {
      setUploading(false);
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

  const dropdownMenu = [
    {
      key: "1",
      label: <label htmlFor="profile">Upload</label>,
    },
    {
      key: "2",
      label: <span>Choose Avatar</span>,
      children: avatars.map((data, index) => ({
        key: index,
        label: (
          <img
            src={data}
            className="w-8 h-8"
            onClick={() => setUserData({ ...userData, profile: data })}
          />
        ),
      })),
      placement: "bottom",
    },
  ];

  return (
    <form
      className="flex flex-col py-3 px-5 gap-3 border border-[--border-color] bg-[--bg-color] rounded-md "
      onSubmit={handleSubmit}
    >
      <section className="relative">
        {uploading && (
          <span className="absolute top-1/3 left-10 ">
            <Loader />
          </span>
        )}
        <img
          src={preview ?? userData?.profile}
          alt="profile"
          className="h-28 w-28 object-cover rounded-full border-2 border-pink-500 bg-pink-100"
        />
        <CustomDropdownMenu
          dropdownMenu={dropdownMenu}
          icon={
            <FaEdit className="cursor-pointer absolute left-24 bottom-2 text-pink-500 text-lg" />
          }
        />
        <input
          type="file"
          name="profile"
          id="profile"
          className="hidden"
          onChange={handleImageChange}
        />
      </section>
      <label className="flex flex-col gap-1">
        <span className="font-medium ">Bio</span>
        <textarea
          rows={4}
          name="bio"
          value={userData?.bio}
          className="w-full border border-[--border-color] bg-[--card-bg] rounded-md p-1 outline-none"
          onChange={handleChange}
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="font-medium ">Portfolio</span>
        <input
          type="text"
          name="portfolio"
          value={userData?.portfolio}
          className="w-full border border-[--border-color] bg-[--card-bg] rounded-md p-1"
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
        <button
          disabled={uploading || editDisabled}
          type="submit"
          className="btn-light bg-yellow px-5 py-1 disabled:bg-yellow-400/70 disabled:text-gray-500"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default EditProfile;
