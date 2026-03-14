// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { setIsOpen } from '../redux/commentSlice';
// import { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'sonner';
// import { setComments } from '../redux/selectedBlogSlice';

// const CommentModal = () => {
//   const [comment, setComment] =useState()
//   const user = useSelector((state) => state.userSlice);
//   const {token} = useSelector((state) => state.userSlice);
//   // const token =user;
//   const { _id: blogId, comments } = useSelector((state) => state.selectedBlogSlice);

//   const dispatch =useDispatch()

//   async function handleComment(){
//     try {
//       let res = await axios.post(
//         `${import.meta.env.VITE_BACKEND_URL}/blogs/comment/${blogId}`,
//         {
//           comment,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         },
//       );
//       console.log(res)
//       dispatch(setComments(res.data.newComment))
//       toast.success(res.data.message)
//     } catch (error) {
//       console.log(error.response);
//       // toast.error(error.response.data.message || "Server error");
//     }
//   }
//   return (
//     <div className="bg-white h-screen fixed top-0 right-0 w-[400px] z-50  drop-shadow-2xl p-5 overflow-y-scroll">
//       <div className="flex items-center justify-between">
//         <h1 className="text-2xl font-medium">Responses ({23})</h1>
//         <img
//           onClick={() => dispatch(setIsOpen(false))}
//           src="/cross.svg"
//           className="w-6 h-6 mt-1 cursor-pointer"
//         />
//       </div>

//       <br className="" />
//       <div>
//         <div className="flex items-center justify-start gap-2">
//           <div className="size-8 rounded-full flex items-center justify-center bg-primary text-white text-xl font-bold border-2 border-primary/20">
//             {user?.name
//               ?.split(" ")
//               .map((word) => word.charAt(0).toUpperCase())
//               .slice(0, 2)
//               .join("")}
//           </div>
//           <h3 className="text-gray-600 font-medium ">{user.name}</h3>
//         </div>
//       </div>

//       <div className="my-3">
//         <input
//           type="text"
//           placeholder="What are your thoughts?"
//           className=" bg-gray-100 w-full p-2 text-md focus:outline-none rounded-sm"
//           onChange={(e) => setComment(e.target.value)}
//         />
//         <button onClick={handleComment}>Respond</button>
//       </div>
//       <div className="mt-4">
//         {comments.map((comment) => (
//           <div className="flex flex-col gap-2">
//             <div className="flex w-full justify-between">
//               <div className="flex gap-3">
//                 <div className="w-10 h-10 ">
//                   <img
//                     src={`https://api.dicebear.com/9.x/initials/svg?seed=${comment.user.name}`}
//                     alt=""
//                     className="rounded-full"
//                   />
//                 </div>
//                 <div>
//                   <p className='capitalize font-medium'>{comment.user.name}</p>
//                   <p>
//                     {new Date(comment.createdAt).toLocaleDateString("en-US", {
//                       month: "short",
//                       day: "numeric",
//                       year: "numeric",
//                     })}
//                   </p>
//                 </div>
//               </div>
//               <i className="fi fi-bs-menu-dots"></i>
//             </div>
//             <div>
//               <p>This is comment msg</p>
//             </div>
//             <div>
//               <div
//               // onClick={handleLike}
//               >
//                 {true ? (
//                   <button className="size-8 rounded-full bg-[#f1f0f5] flex items-center justify-center hover:bg-primary hover:text-white transition-all">
//                     <span
//                       className="material-symbols-outlined text-xs "
//                       style={{
//                         fontVariationSettings:
//                           "'FILL' 1, 'wght' 10, 'GRAD' 0, 'opsz' 24",
//                       }}
//                     >
//                       thumb_up
//                     </span>
//                   </button>
//                 ) : (
//                   <button className="size-8 rounded-full bg-[#f1f0f5] flex items-center justify-center hover:bg-primary hover:text-white transition-all">
//                     <span className="material-symbols-outlined text-sm">
//                       thumb_up
//                     </span>
//                   </button>
//                 )}
//               </div>
//             </div>
//             {/*
//             <p>{comment.comment}</p> */}
//               <span>{10}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CommentModal

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../redux/commentSlice";
import axios from "axios";
import { toast } from "sonner";
import { setCommentLikes, setComments } from "../redux/selectedBlogSlice";

const Avatar = ({ name, size = 9 }) => {
  const initials =
    name
      ?.split(" ")
      .map((w) => w.charAt(0).toUpperCase())
      .slice(0, 2)
      .join("") || "?";
  const colors = [
    "bg-emerald-500",
    "bg-blue-500",
    "bg-violet-500",
    "bg-rose-500",
    "bg-amber-500",
    "bg-teal-500",
  ];
  const color = colors[name?.charCodeAt(0) % colors.length] || "bg-gray-400";
  return (
    <div
      className={`w-${size} h-${size} rounded-full ${color} flex items-center justify-center text-white font-semibold text-sm flex-shrink-0`}
    >
      {initials}
    </div>
  );
};

const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const CommentItem = ({ comment }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(comment.likes || 0);
  const [menuOpen, setMenuOpen] = useState(false);
  const { token, id: userId } = useSelector((state) => state.userSlice);


const dispatach = useDispatch();
  const handleCommentLike = async(commentId) => {

    // setLiked((prev) => !prev);
    // setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  try {
    const res = await axios.patch(
      `${import.meta.env.VITE_BACKEND_URL}/blogs/like-comment/${commentId}`,
      {  },
      { headers: { Authorization: `Bearer ${token}` } },
    );

    toast.success(res.data.message);
    dispatach(setCommentLikes({commentId, userId}))
  } catch (error) {
    toast.error(error?.response?.data?.message || "Something went wrong");
  }
  };

  return (
    <div className="group py-5 border-b border-gray-100 last:border-0">
      {/* Author row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5">
          <Avatar name={comment.user?.name} size={8} />
          <div>
            <p className="text-sm font-semibold text-gray-900 capitalize leading-tight">
              {comment.user?.name}
            </p>
            <p className="text-xs text-gray-400 mt-0.5">
              {formatDate(comment.createdAt)}
            </p>
          </div>
        </div>

        {/* Three-dot menu */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-full hover:bg-gray-100"
          >
            <svg
              className="w-4 h-4 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <circle cx="4" cy="10" r="1.5" />
              <circle cx="10" cy="10" r="1.5" />
              <circle cx="16" cy="10" r="1.5" />
            </svg>
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-1 w-36 bg-white border border-gray-100 rounded-lg shadow-lg z-10 py-1">
              {["Report", "Copy link"].map((item) => (
                <button
                  key={item}
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      
      <p className="text-sm text-gray-700 leading-relaxed mb-3 pl-10">
        {comment.comment}
      </p>

      
      <div className="flex items-center gap-1.5 pl-10">
        <button
          onClick={()=> handleCommentLike(comment._id)}
          className="flex items-center gap-1.5 text-gray-400 hover:text-gray-700 transition-colors group/like"
        >
          <svg
            className={`w-4 h-4 transition-colors ${comment.likes.includes(userId) ? "text-gray-800 fill-gray-800" : "fill-none stroke-current"}`}
            viewBox="0 0 24 24"
            strokeWidth={1.8}
          >
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
            <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
          </svg>
          <span className="text-xs font-medium">{comment.likes.length}</span>
        </button>
      </div>
    </div>
  );
};

const CommentModal = () => {
  const [comment, setComment] = useState("");
  const [focused, setFocused] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.userSlice);
  const { token} = useSelector((state) => state.userSlice);
  const { _id: blogId, comments = [] } = useSelector(
    (state) => state.selectedBlogSlice,
  );

  const handleComment = async () => {
    if (!comment.trim()) return;
    setSubmitting(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/blogs/comment/${blogId}`,
        { comment },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      dispatch(setComments(res.data.newComment));
      toast.success(res.data.message);
      setComment("");
      setFocused(false);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };
  const handleCommentLike = async()=>{

  }

  const handleCancel = () => {
    setComment("");
    setFocused(false);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px]"
        onClick={() => dispatch(setIsOpen(false))}
      />

      {/* Sidebar */}
      <div className="bg-white h-screen fixed top-0 right-0 w-full max-w-[400px] z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 tracking-tight">
            Responses
            <span className="ml-2 text-sm font-normal text-gray-400">
              ({comments.length})
            </span>
          </h2>
          <button
            onClick={() => dispatch(setIsOpen(false))}
            className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Compose Box */}
        <div className="px-6 py-4 border-b border-gray-100">
          <div
            className={`rounded-2xl border transition-all duration-200 ${focused ? "border-gray-300 shadow-sm" : "border-gray-200 bg-gray-50"}`}
          >
            {/* Author */}
            <div className="flex items-center gap-2.5 px-4 pt-3.5">
              <Avatar name={user?.name} size={8} />
              <span className="text-sm font-semibold text-gray-800">
                {user?.name}
              </span>
            </div>

            {/* Input */}
            <textarea
              rows={focused ? 3 : 1}
              value={comment}
              placeholder="What are your thoughts?"
              onFocus={() => setFocused(true)}
              onChange={(e) => setComment(e.target.value)}
              className="w-full px-4 pt-2.5 pb-1 text-sm text-gray-700 bg-transparent resize-none focus:outline-none placeholder:text-gray-400 transition-all"
            />

            {/* Actions */}
            {focused && (
              <div className="flex items-center justify-end gap-2 px-4 pb-3">
                <button
                  onClick={handleCancel}
                  className="px-4 py-1.5 text-sm text-gray-500 hover:text-gray-800 font-medium rounded-full hover:bg-gray-100 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleComment}
                  disabled={!comment.trim() || submitting}
                  className="px-5 py-1.5 text-sm font-semibold bg-gray-900 text-white rounded-full hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  {submitting ? "Posting..." : "Respond"}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Comments List */}
        <div className="flex-1 overflow-y-auto px-6">
          {comments.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-48 text-center">
              <svg
                className="w-10 h-10 text-gray-200 mb-3"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-sm text-gray-400 font-medium">
                No responses yet
              </p>
              <p className="text-xs text-gray-300 mt-1">
                Be the first to share your thoughts
              </p>
            </div>
          ) : (
            comments.map((c, i) => <CommentItem key={c._id || i} comment={c} />)
          )}
        </div>
      </div>
    </>
  );
};

export default CommentModal;