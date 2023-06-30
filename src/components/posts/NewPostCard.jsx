import React, { useState } from "react";
import { BsCardImage, BsEmojiSmile } from "react-icons/bs";
import EmojiPicker, { EmojiStyle } from "emoji-picker-react";
import { useDispatch, useSelector } from "react-redux";
import { createNewPost } from "../../app/features/postsSlice";
import { authSelector } from "../../app/features/authSlice";
import { useMedia } from "../../hooks/useMedia";
import { Dropdown } from "antd";
import { themeSelector } from "../../app/features/themeSlice";
import Loader from "../common/Loader";

const NewPostCard = () => {
  const dispatch = useDispatch();
  const { uploadImage } = useMedia();
  const { encodedToken, foundUser } = useSelector(authSelector);
  const { theme } = useSelector(themeSelector);
  const [uploading, setUploading] = useState(false);
  const [postData, setPostData] = useState({
    content: "",
    postMedia: "",
    username: foundUser.username,
    userId: foundUser.userId,
  });
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [preview, setPreview] = useState(null);
  const handleImageChange = (event) => {
    setUploading(true);
    const file = event.target.files[0];

    uploadImage(file).then((response) => {
      if (response.success) {
        setPostData({ ...postData, postMedia: response.res.secure_url });
      }
      setUploading(false);
    });

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setPreview(reader.result);
    };
  };
  const disabled =
    postData.content.trim().length === 0 &&
    postData.postMedia.trim().length === 0;
  return (
    <div className="w-full p-5 border border-gray-400 rounded-md h-auto my-5 shadow-sm">
      <div className="flex items-start gap-4">
        <img
          src={foundUser.profile}
          alt="newpost"
          className="w-10 h-10 rounded-lg border border-black"
        />
        <label className="w-full">
          <textarea
            value={postData.content}
            type="text"
            className="text-xl text-gray-400  w-full h-full outline-none bg-transparent"
            placeholder="What's on your mind?!"
            onChange={(e) =>
              setPostData({ ...postData, content: e.target.value })
            }
          />
        </label>
      </div>
      {preview && (
        <div className="text-center relative">
          {uploading && (
            <span className="absolute top-1/3 left-12 ">
              <Loader />
            </span>
          )}
          <img src={preview} alt="contentImage" className="w-32 h-32" />
        </div>
      )}
      <div className=" pt-2 flex items-center justify-between mt-4">
        <div className="relative  flex items-center gap-4">
          {/* <label> */}
          <label
            for="postImg"
            className="p-2 rounded-full hover:bg-purple-500/20 cursor-pointer"
          >
            <BsCardImage className="text-xl text-purple-500" />
          </label>
          {/* </label> */}
          <input
            id="postImg"
            type="file"
            className="hidden"
            accept=".jpeg,.jpg,.png"
            onChange={handleImageChange}
          />
          <span className=" p-2 rounded-full hover:bg-emerald-500/20 cursor-pointer">
            <Dropdown
              placement="bottomCenter"
              trigger="click"
              open={showEmojiPicker}
              onOpenChange={() => setShowEmojiPicker(!showEmojiPicker)}
              menu={{
                items: [
                  {
                    key: "1",
                    label: (
                      <EmojiPicker
                        theme={theme}
                        onEmojiClick={(emojiData) => {
                          let text = postData.content;
                          text = `${text}${emojiData.emoji}`;
                          setPostData({ ...postData, content: text });
                        }}
                        autoFocusSearch={false}
                        emojiStyle={EmojiStyle.NATIVE}
                        height={350}
                        className="z-50"
                      />
                    ),
                  },
                ],
              }}
              theme="dark"
            >
              <BsEmojiSmile
                className="text-xl text-emerald-500"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              />
            </Dropdown>
          </span>
          {/* {showEmojiPicker && (
            <div className="absolute top-10 left-10">
              <EmojiPicker
                onEmojiClick={(emojiData) => {
                  let text = postData.content;
                  text = `${text}${emojiData.emoji}`;
                  setPostData({ ...postData, content: text });
                }}
                autoFocusSearch={false}
                emojiStyle={EmojiStyle.NATIVE}
                height={350}
              />
            </div>
          )} */}
        </div>
        <button
          disabled={disabled || uploading}
          className={`bg-amber-300   px-5 py-0.5 rounded-full btn-light disabled:cursor-not-allowed`}
          onClick={() => {
            dispatch(createNewPost({ encodedToken, postData }));
            setPostData({
              content: "",
              postMedia: "",
            });
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default NewPostCard;
