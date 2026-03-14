import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router'

const Navbar = () => {
 const user = useSelector((slice) => slice.userSlice);
  return (
    <header className="sticky top-0 z-10 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 lg:px-20 lg:py-4 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6 justify-between">
          <Link to={"/"} className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-3xl font-bold">
              auto_stories
            </span>
            <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold tracking-tight">
              <span className="text-blue-500">Re</span>Blog
            </h2>
          </Link>
          <div className="relative w-fit">
            <img
              src="/search.svg"
              className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2"
            />

            <div className="bg-gray-100 rounded-4xl pl-12 pr-20 md:pl-12 md:pr-32 py-2">
              <p className="text-gray-600">Search</p>
            </div>
          </div>
        </div>
        {/* <nav className="hidden md:flex items-center gap-10">
          <a
            className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors"
            href="#"
          >
            Home
          </a>
          <a
            className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors"
            href="#"
          >
            Blogs
          </a>
          <a
            className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors"
            href="#"
          >
            Pricing
          </a>
        </nav> */}
        <div className="flex items-center justify-center gap-6">
          <Link to={"/create-blog"}>
            <div className="flex items-center justify-center">
              <img src="/write.svg" className="w-5 h-5 mr-2" />

              <p className="text-gray-600 text-md hidden sm:block">Write</p>
            </div>
          </Link>
          {user ? (
            <div>
              <div className="size-14 rounded-full flex items-center justify-center bg-primary text-white text-xl font-bold border-2 border-primary/20">
                {user.name
                  ?.split(" ")
                  .map((word) => word.charAt(0).toUpperCase())
                  .slice(0, 2)
                  .join("")}
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2">
                <Link to={"/signup"}>
                  <button className="bg-primary hover:bg-primary/90 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all shadow-lg shadow-primary/25">
                    Sign up
                  </button>
                </Link>
                <Link to={"/signin"}>
                  <button className="hidden sm:block text-slate-600 dark:text-slate-400 text-sm font-semibold px-4 py-2">
                    Sign in
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar