import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router';
import { toast } from 'sonner';
import { addSelectedBlog, removeSelectedBlog } from '../redux/selectedBlogSlice';
import CommentModal from '../components/CommentModal';
import { setIsOpen } from '../redux/commentSlice';
import EditorRenderer from '../components/Editorrenderer';
import { setComments, setCommentLikes } from "../redux/selectedBlogSlice";


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

const BlogPage = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState({})
  // console.log(blogData)
  const [isLike, setIsLike] =useState(false)
  const [comment, setComment] = useState("");
  const [focused, setFocused] = useState(false);
  const [submitting, setSubmitting] = useState(false);


  // const user = JSON.parse(localStorage.getItem("user"))
  // console.log("user",user)
  // console.log("blogData", blogData)

  const user = useSelector((state)=> state.userSlice)
  const { isOpen } = useSelector((state) => state.commentSlice);
  const { likes, comments, content } = useSelector((state) => state.selectedBlogSlice);
  const {token} =user;
  const dispatch = useDispatch()
  // console.log(user);


  async function fetchBlog() {
    try {
      const res = await axios.get(`http://localhost:3000/api/v1/blogs/${id}`);
      // console.log(res.data.blog);
      setBlogData(res.data.blog);
      dispatch(addSelectedBlog(res.data.blog))
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  }




  // async function handleLike(){
  //   if(token){
  //   setIsLike(prev=> !prev)

  //   let res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/blogs/like/${blogData._id}`, {}, {
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   })
  //   // console.log(res)
  //   toast.success(res.data.message)
  //   }else{
  //     toast.warning("Please sign in to like this blog")
  //   }
  // }
  async function handleLike() {
    if (!token) {
      toast.warning("Please sign in to like this blog");
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/blogs/like/${blogData._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setIsLike((prev) => !prev);

      setBlogData((prev) => {
        let updatedLikes;

        if (prev.likes?.includes(user.id)) {
          updatedLikes = prev.likes.filter((id) => id !== user.id);
        } else {
          updatedLikes = [...prev.likes, user.id];
        }

        return { ...prev, likes: updatedLikes };
      });
      dispatch()
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  }

  function handleComment(){
    dispatch(setIsOpen())
  }
  async function handlePostComment() {
    if (!token) {
      toast.warning("Please sign in to comment");
      return;
    }
    if (!comment.trim()) return;
    setSubmitting(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/blogs/comment/${blogData._id}`,
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
  }

    // useEffect(() => {
    //   fetchBlog();

    //   return () => {
    //     dispatch(removeSelectedBlog());
    //   };
    // }, [id]);

    useEffect(() => {
      fetchBlog();
      dispatch(setIsOpen(false))
    }, [id]);

    useEffect(() => {
      if (blogData?.likes?.includes(user.id)) {
        setIsLike(true);
      } else {
        setIsLike(false);
      }
    }, [blogData]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-primary/10">
        <div className="h-full bg-primary" style={{ width: "35%" }}></div>
      </div>
      <div className="layout-container flex h-full grow flex-col">
        <main className="flex-1">
          <article className="max-w-[960px] mx-auto px-4 pt-12 pb-24">
            <div className="flex flex-col items-center text-center mb-12">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                Web Development
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#121118] leading-[1.1] tracking-tight mb-8 ">
                {blogData?.title}{" "}
                {/* <span className="text-primary">What's Next?</span> */}
              </h1>
              <div className="flex items-center gap-4 text-left">
                <div className="size-14 rounded-full flex items-center justify-center bg-primary text-white text-xl font-bold border-2 border-primary/20">
                  {blogData?.creator?.name
                    ?.split(" ")
                    .map((word) => word.charAt(0).toUpperCase())
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <p className="text-[#121118] font-bold text-lg leading-none">
                    {blogData?.creator?.name}
                  </p>
                  <p className="text-[#67608a] text-sm mt-1">
                    {new Date(blogData?.createdAt).toDateString()} • 8 min read
                  </p>
                </div>
                {user.id == blogData?.creator?._id && (
                  <button className="ml-4 flex items-center justify-center rounded-full h-8 px-4 bg-[#f1f0f5] text-[#121118] text-xs font-bold hover:bg-primary hover:text-white transition-all">
                    <Link to={"/edit-blog/" + blogData.blogId}>Edit</Link>
                  </button>
                )}
              </div>
            </div>

            <div className="w-full aspect-[21/9] bg-slate-200 rounded-xl overflow-hidden mb-16 shadow-2xl shadow-primary/5">
              <img
                alt="Workplace with laptop and code on screen"
                className="w-full h-full object-cover"
                data-alt="Modern workspace with laptop showing code editor"
                src={blogData?.image}
              />
            </div>

            <div className="max-w-[700px] mx-auto prose prose-slate lg:prose-xl">
              {/* <p className="text-xl leading-relaxed text-[#3a374d] mb-8 first-letter:text-5xl first-letter:uppercase first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left"> */}
              <EditorRenderer content={blogData.content} />
              {/* <div>
                  {
                    content.blocks.map((block)=> {
                      if(block.type == "header"){

                      }else if(block.type == 'paragraph'){
                        return (
                          <p dangerouslySetInnerHTML={{__html: block.data.text}}></p>
                        )
                      }
                    })
                  }
                </div> */}
              {/* </p> */}
              {/* <h2 className="text-2xl md:text-3xl font-bold text-[#121118] mt-12 mb-6">
                1. The Shift to Edge Computing
              </h2> */}
              {/* <p className="text-lg leading-relaxed text-[#3a374d] mb-6">
                Traditional cloud infrastructure is giving way to edge
                computing. By moving logic closer to the user, we're seeing
                dramatic improvements in latency and personalized user
                experiences. Platforms like Vercel and Netlify are leading this
                charge with Edge Functions.
              </p> */}
              {/* <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">
                    check_circle
                  </span>
                  <span className="text-[#3a374d] text-lg">
                    Sub-millisecond latency for global users.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">
                    check_circle
                  </span>
                  <span className="text-[#3a374d] text-lg">
                    Reduced server load and bandwidth costs.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">
                    check_circle
                  </span>
                  <span className="text-[#3a374d] text-lg">
                    Enhanced security through decentralized processing.
                  </span>
                </li>
              </ul> */}
              {/* <blockquote className="my-10 italic text-2xl font-medium text-[#121118] bg-primary/5 p-8 rounded-lg border-l-4 border-primary">
                "The next billion users won't be on high-speed fiber. They'll be
                on mobile devices in emerging markets. Speed isn't a luxury;
                it's an accessibility requirement."
              </blockquote> */}
              {/* <h2 className="text-2xl md:text-3xl font-bold text-[#121118] mt-12 mb-6">
                2. AI-Integrated Development
              </h2> */}
              {/* <p className="text-lg leading-relaxed text-[#3a374d] mb-6">
                We are no longer just writing code; we are orchestrating it. AI
                tools like GitHub Copilot and ChatGPT have fundamentally changed
                how we debug, refactor, and architect our MERN stack
                applications. The focus is shifting from syntax to system
                design.
              </p> */}
            </div>
            <div className="max-w-[700px] mx-auto border-y border-[#f1f0f5] py-8 mt-16 flex flex-row-reverse flex-wrap items-center justify-between gap-6">
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-[#f1f0f5] text-[#67608a] text-sm font-medium rounded hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">
                  #javascript
                </span>
                <span className="px-3 py-1 bg-[#f1f0f5] text-[#67608a] text-sm font-medium rounded hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">
                  #mern
                </span>
                <span className="px-3 py-1 bg-[#f1f0f5] text-[#67608a] text-sm font-medium rounded hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors">
                  #future
                </span>
              </div>
              <div className="flex items-center gap-4">
                {/* 
                
                 */}

                <div onClick={handleLike}>
                  {isLike ? (
                    <button className="size-9 rounded-full bg-[#f1f0f5] flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                      <span
                        className="material-symbols-outlined text-lg"
                        style={{
                          fontVariationSettings:
                            "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                        }}
                      >
                        thumb_up
                      </span>
                    </button>
                  ) : (
                    <button className="size-9 rounded-full bg-[#f1f0f5] flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                      <span className="material-symbols-outlined text-lg">
                        thumb_up
                      </span>
                    </button>
                  )}
                </div>
                <span>{blogData?.likes?.length}</span>
                <button className="size-9 rounded-full bg-[#f1f0f5] flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <span
                    onClick={handleComment}
                    className="material-symbols-outlined text-lg"
                  >
                    mode_comment
                  </span>
                </button>
                <span>{comments?.length}</span>
              </div>
            </div>

            <section className="max-w-[700px] mx-auto mt-20">
              {/* Header */}
              <h2 className="text-lg font-bold text-gray-900 tracking-tight mb-6">
                Responses
                <span className="ml-2 text-sm font-normal text-gray-400">
                  ({comments?.length || 0})
                </span>
              </h2>

              {/* Compose Box — identical to CommentModal */}
              <div className="mb-10">
                <div
                  className={`rounded-2xl border transition-all duration-200 ${focused ? "border-gray-300 shadow-sm bg-white" : "border-gray-200 bg-gray-50"}`}
                >
                  {/* Author row */}
                  <div className="flex items-center gap-2.5 px-4 pt-3.5">
                    <Avatar name={user?.name} size={8} />
                    <span className="text-sm font-semibold text-gray-800">
                      {user?.name || "Guest"}
                    </span>
                  </div>

                  {/* Textarea */}
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
                        onClick={() => {
                          setComment("");
                          setFocused(false);
                        }}
                        className="px-4 py-1.5 text-sm text-gray-500 hover:text-gray-800 font-medium rounded-full hover:bg-gray-100 transition-all"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handlePostComment}
                        disabled={!comment.trim() || submitting}
                        className="px-5 py-1.5 text-sm font-semibold bg-gray-900 text-white rounded-full hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                      >
                        {submitting ? "Posting..." : "Respond"}
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Comments List — identical card to CommentModal's CommentItem */}
              <div className="divide-y divide-gray-100">
                {comments?.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
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
                  comments.map((c) => (
                    <InlineCommentItem
                      key={c._id}
                      comment={c}
                      token={token}
                      userId={user?.id}
                      blogCreatorId={blogData?.creator?._id}
                    />
                  ))
                )}
              </div>
            </section>
          </article>
        </main>
      </div>
      {/* left Side icon */}
      <div className="hidden lg:flex fixed left-12 top-1/2 -translate-y-1/2 flex-col gap-6">
        <button className="group flex items-center gap-2">
          <span className="size-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#67608a] group-hover:bg-primary group-hover:text-white transition-all">
            <span
              className="material-symbols-outlined text-lg"
              onClick={handleLike}
            >
              thumb_up
            </span>
          </span>
        </button>
        <button className="group flex items-center gap-2">
          <span className="size-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#67608a] group-hover:bg-primary group-hover:text-white transition-all">
            <span
              onClick={handleComment}
              className="material-symbols-outlined text-lg"
            >
              chat_bubble
            </span>
          </span>
        </button>
        <button className="group flex items-center gap-2">
          <span className="size-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#67608a] group-hover:bg-primary group-hover:text-white transition-all">
            <span className="material-symbols-outlined text-lg">bookmark</span>
          </span>
        </button>
        <button className="group flex items-center gap-2">
          <span className="size-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#67608a] group-hover:bg-primary group-hover:text-white transition-all">
            <span className="material-symbols-outlined text-lg">share</span>
          </span>
        </button>
      </div>
      {isOpen && <CommentModal />}
    </>
  );
}

export default BlogPage

