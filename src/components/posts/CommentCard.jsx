import { v4 as uuid } from "uuid";
import { BsThreeDots } from "react-icons/bs";
import CustomDropdownMenu from "../common/CustomDropdownMenu";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteComment,
  editComment,
  replyOnComment,
} from "../../app/features/postsSlice";

const CommentCard = ({ comment, postId, currentUsername }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState(comment?.comment);
  const [isReply, setIsReply] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [reply, setReply] = useState({
    replyId: uuid(),
    createdAt: new Date(),
    reply: "",
    username: currentUsername,
  });
  const dropdownMenu = [
    {
      key: "1",
      label: <span onClick={() => setIsEdit(true)}>Edit</span>,
    },
    {
      key: "2",
      label: (
        <span
          onClick={() => {
            dispatch(deleteComment({ postId, commentId: comment._id }));
          }}
        >
          Delete
        </span>
      ),
    },
  ];
  return (
    <div className="p-1 flex items-start gap-3 border-b pb-1 mb-3 hover:bg-gray-400/10">
      <span className="w-12">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={comment.profile}
          alt={comment.username}
        />
      </span>
      <div className="flex flex-col gap-3 w-full">
        <div className="flex items-center justify-between ">
          <div className="flex gap-1 items-center">
            <h4 className="text-[--primary-text]">
              {comment.firstName} {comment.lastName}
            </h4>{" "}
            <span className="text-xs text-gray-500">@{comment.username}</span>
          </div>
          <span>
            {currentUsername === comment.username && (
              <CustomDropdownMenu
                dropdownMenu={dropdownMenu}
                icon={<BsThreeDots className="cursor-pointer" />}
              />
            )}
          </span>
        </div>
        {isEdit ? (
          <label className="flex flex-col gap-1">
            <input
              className="w-full bg-[--card-bg] p-1 rounded-md outline-none border"
              type="text"
              placeholder="comment..."
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
            <div className="flex gap-3">
              <button onClick={() => setIsEdit(false)}>cancel</button>
              <button
                onClick={() => {
                  dispatch(
                    editComment({
                      updatedComment: { ...comment, comment: editText },
                      postId,
                      commentId: comment._id,
                    })
                  );
                  setIsEdit(false);
                }}
              >
                save
              </button>
            </div>
          </label>
        ) : (
          <div>
            <p className="text-[--primary-text]">{comment.comment}</p>
            <div>
              {isReply ? (
                <label className="ms-5 flex flex-col gap-1">
                  <input
                    className="w-full  outline-none p-2.5 border-none bg-[--card-bg] text-[--primary-text] "
                    type="text"
                    placeholder="reply..."
                    value={reply.reply}
                    onChange={(e) =>
                      setReply({ ...reply, reply: e.target.value })
                    }
                  />
                  <div className="flex gap-3 ">
                    <button
                      className="text-xs text-yellow-400"
                      onClick={() => setIsReply(false)}
                    >
                      cancel
                    </button>
                    <button
                      disabled={reply?.reply?.trim().length === 0}
                      className="text-xs text-pink-500"
                      onClick={() => {
                        dispatch(
                          replyOnComment({
                            reply,
                            postId,
                            commentId: comment._id,
                          })
                        );
                        setIsReply(false);
                      }}
                    >
                      save
                    </button>
                  </div>
                </label>
              ) : (
                <div>
                  <button
                    onClick={() => setIsReply(true)}
                    className="text-xs font-semibold text-sky-500 p-1 rounded-sm"
                  >
                    Reply
                  </button>
                </div>
              )}
            </div>
            <div className="ms-5">
              <button
                className="text-gray-500 text-sm flex gap-2 items-center"
                onClick={() => setShowReplies(!showReplies)}
              >
                <div className="w-10 h-[0.75px] bg-gray-100"></div>{" "}
                <span>{showReplies ? "hide" : "view"} replies</span>
              </button>
              {showReplies &&
                comment?.replies?.map((data) => (
                  <p className="text-sm  flex gap-2 p-1 bg-[--card-bg] text-[--primary-text]">
                    <span>
                      {<span className="text-xs">@{data.username}</span>}
                    </span>
                    <span className="">{data.reply}</span>
                  </p>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentCard;