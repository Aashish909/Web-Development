import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router';
import { toast } from 'sonner';
import { addSelectedBlog, removeSelectedBlog } from '../redux/selectedBlogSlice';
import CommentModal from '../components/CommentModal';
import { setIsOpen } from '../redux/commentSlice';
import EditorRenderer from '../components/Editorrenderer';

const BlogPage = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState({})
  // console.log(blogData)
  const [isLike, setIsLike] =useState(false)

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
              <h3 className="text-2xl font-bold text-[#121118] mb-8">
                Join the discussion ({comments?.length})
              </h3>

              <div className="bg-white p-6 rounded-xl border border-[#f1f0f5] shadow-sm mb-12">
                <div className="flex gap-4 mb-4">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    JD
                  </div>
                  <textarea
                    className="flex-1 min-h-[100px] p-4 bg-background-light border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-sm"
                    placeholder="Add to the discussion..."
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button className="px-6 py-2 bg-primary text-white font-bold rounded-lg text-sm hover:opacity-90 transition-opacity">
                    Post Comment
                  </button>
                </div>
              </div>
              {/* Fake comment */}
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div
                    className="size-10 rounded-full bg-cover bg-center shrink-0"
                    data-alt="User avatar"
                  >
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr3Q1yn_Z2eRRt1ykBMQ6Y3LiVABMgWHYGjytEY0USCaorSrsZ5n4H70c673258Hy-rPv3Ykh7nC7fjJRJ0h_gt_srZiDs_G7rB4HarFmoODL97ngd0P9vvsax7HLhY7KauCl0X4OHvsevlG0CP9y03ZW3AFFoLRj2zlY4fATPAgdbA0qzXyOd-Sm8STXZh0TlZ00n64KFEQeDCdmnyQnluF-Ik-ixOFnNfMqpG--e_oCinclql5psS5aSak1vYNF52LWTG-uGyOI"
                      alt=""
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-[#121118]">
                        Alex Rivera
                      </span>
                      <span className="text-xs text-[#67608a]">
                        2 hours ago
                      </span>
                    </div>
                    <p className="text-[#3a374d] text-base leading-relaxed">
                      Really insightful read. The point about edge computing is
                      spot on. We've seen significant improvements since
                      migrating our static assets to the edge.
                    </p>
                    <div className="flex gap-4 mt-3">
                      <button className="flex items-center gap-1 text-xs font-bold text-[#67608a] hover:text-primary">
                        <span className="material-symbols-outlined text-sm">
                          thumb_up
                        </span>{" "}
                        14
                      </button>
                      <button className="text-xs font-bold text-[#67608a] hover:text-primary">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 ml-12">
                  <div
                    className="size-10 rounded-full bg-cover bg-center shrink-0"
                    data-alt="User avatar"
                  >
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf7wUFiVIbQlz2WeWAUYaK5KeKGkFvh9FJeyB4m8Vzl1xDzpRw2FCiOX8GkIej_bh4pVX5do4R33CB5dW7Uk6lXP6FbYrSlz85KdMCSufdhCv8OJtpA5u3DtWBdWRNW-7szc-Z9W2ljTvrUxsTmvTeLWI4nEIlESQQKD9588b8NuUsdz0H3lbGubESZoo9iWk_G88LRVlJQrBcMiZ8B1DPlKpxlsLK-w5aA02P177b7FVPJXpwyWqWO662r8nRcoUTxBJVAJLhQOE"
                      alt=""
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-[#121118]">
                        Marcus Chen
                      </span>
                      <span className="text-xs text-[#67608a]">1 hour ago</span>
                    </div>
                    <p className="text-[#3a374d] text-base leading-relaxed">
                      Which edge platform are you using? I've been considering
                      Cloudflare Workers for our next project.
                    </p>
                    <div className="flex gap-4 mt-3">
                      <button className="flex items-center gap-1 text-xs font-bold text-[#67608a] hover:text-primary">
                        <span className="material-symbols-outlined text-sm">
                          thumb_up
                        </span>{" "}
                        3
                      </button>
                      <button className="text-xs font-bold text-[#67608a] hover:text-primary">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div
                    className="size-10 rounded-full bg-cover bg-center shrink-0"
                    data-alt="User avatar"
                  >
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB-UlKl3OodibBLjPJ-kf0iHjwTsZ9RwpcJH4rP_yJB_xvAPF3p6fVax5ufsjS3bqd4iJDH9FJQsuwkEmcjsDdXqqX0cXkoaJgvaqMuzdu9K0ArfIyQntCTQLLEclGrpJUP2JJ2cPX1J7572mk4CapNyJE_YKt7G-pnYS5LCulcHMWlSkvYVCtCH9vCaSpgBKV3dEO-Tx17v4Out9Be6xsJf1LpERpvJ5dDgOuNn2jeuJiYLQoOrPauK2250NldDcA-TEE2zoxIhI"
                      alt=""
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-[#121118]">
                        Sarah Miller
                      </span>
                      <span className="text-xs text-[#67608a]">
                        5 hours ago
                      </span>
                    </div>
                    <p className="text-[#3a374d] text-base leading-relaxed">
                      Thanks for sharing! Would love to see a part 2 focusing
                      more on the specific AI integration techniques for MERN.
                    </p>
                    <div className="flex gap-4 mt-3">
                      <button className="flex items-center gap-1 text-xs font-bold text-[#67608a] hover:text-primary">
                        <span className="material-symbols-outlined text-sm">
                          thumb_up
                        </span>{" "}
                        8
                      </button>
                      <button className="text-xs font-bold text-[#67608a] hover:text-primary">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
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

