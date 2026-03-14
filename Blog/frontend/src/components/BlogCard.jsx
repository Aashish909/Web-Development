import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blogs }) => {
  return (
    <div>
      {blogs?.map((blog) => (
        <Link key={blog._id} to={"/blog/" + blog.blogId}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group flex flex-col gap-4 bg-background-light dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 transition-all hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl">
                <img
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  src={blog.image}
                  alt={blog.title}
                />
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest backdrop-blur-sm">
                  Technology
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-snug group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">
                  {blog.description}
                </p>
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw_eXn5RwTVsdgfn6Up8UpDvpPhjo1QHxybCkAJD7xaqj1N0GFaJcXKnKd4_m-6PsnXu5HsXmbCOaUcvfvHsd4aaVy1wBJDv_UXl10mJqHF_rYpuZajsSO3pLsTiXkAVSdwZ5Vo5eISx_PkU8EpAqi5fObE_SSqgns70u0Ngx2YGoL2Rahas2Vrk8IzR9tccBQdlWaMW-5qImkvHbkefONNWAUm95PNH8E3n24JNfaZSXr6ipf5H8saLbtbjMD823ecJg8K6dz8JE"
                      alt="author"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-slate-900 dark:text-slate-100 text-sm font-bold">
                      {blog.creator?.name}
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs">
                      {new Date(blog.createdAt).toLocaleDateString()} • 8 min
                      read
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard;
