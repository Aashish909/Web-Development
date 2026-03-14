import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import axios from "axios";
import { Link } from "react-router";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  async function fetchBlogs() {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/blogs`);
      setBlogs(res.data.blogs);
      // console.log(res.data.blogs)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
          Explore our stories
        </h1>

        {/* Search */}
        <div className="sm:hidden mb-6 relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            search
          </span>
          <input
            className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl pl-10 pr-4 py-3 text-base focus:ring-2 focus:ring-primary"
            placeholder="Search..."
            type="text"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 items-center">
          <button className="px-5 py-2 rounded-full bg-primary text-white text-sm font-medium">
            All Posts
          </button>

          <button className="px-5 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">devices</span>
            Tech
          </button>

          <button className="px-5 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">spa</span>
            Lifestyle
          </button>

          <button className="px-5 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">palette</span>
            Design
          </button>

          <button className="px-5 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">
              trending_up
            </span>
            Business
          </button>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs?.map((blog) => (
          <Link to={`/blog/${blog.blogId}`}
            key={blog._id}
            className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="aspect-video relative overflow-hidden">
              <div
                className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${blog.image})` }}
              ></div>

              <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Tech
              </span>
            </div>

            <div className="p-6">
              <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {blog.title}
              </h2>

              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3">
                {blog.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(https://lh3.googleusercontent.com/aida-public/AB6AXuDSTKMpSzCEnMbbBT1NcWirymzoTvKrALw3h8oYR60gUn3sKtNx2M_4VN-GYF6ys5DbvkN-wPwLK05lJvXCAh6avqGQqQkythXuqETvrk7qWOWFiQTpy2pXnyPh1zCxmYA-C1mAgNKdtKDBBmsVS810OcNHLBvm6opVBOhJmq4OzvCKU0kl41lpdqeqOGskJb7jo_2yRzyNnHrJCCgRjKfTr3zSsdT8MSyKGvJmYGUhp5hCnqhOE_KFCLpnE1jnsP5nhTbKO7sIr7o)`,
                    }}
                  ></div>

                  <div>
                    <p className="text-xs font-semibold">
                      {blog.creator?.name}
                    </p>
                    <p className="text-[10px] text-slate-500">Tech Editor</p>
                  </div>
                </div>

                <span className="text-[11px] text-slate-500 font-medium">
                  {new Date(blog.createdAt).toDateString()}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <nav className="mt-16 flex items-center justify-center gap-2">
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800">
          <span className="material-symbols-outlined text-lg">
            chevron_left
          </span>
        </button>

        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-semibold">
          1
        </button>

        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 font-semibold">
          2
        </button>

        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 font-semibold">
          3
        </button>

        <span className="px-2 text-slate-400">...</span>

        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 font-semibold">
          12
        </button>

        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800">
          <span className="material-symbols-outlined text-lg">
            chevron_right
          </span>
        </button>
      </nav>
    </main>
  );
};

export default Blogs;