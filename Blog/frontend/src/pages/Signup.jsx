import React, { useState } from 'react'
import { toast } from 'sonner'
import  axios from "axios"
import { Link } from 'react-router'

const Signup = () => {
  const [userData, setUserData] =useState({
    name:"",
    email:"",
    password:""
  })

  async function handleRegister(e) {
    e.preventDefault()
    try {
      // const data = await fetch("http://localhost:3000/api/v1/signup", {
      //   method: "POST",
      //   body: JSON.stringify(userData),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      // const res = await data.json();
      // console.log(res);

      const res = await axios.post("http://localhost:3000/api/v1/signup", userData);
       if(res.status == 201){
                  toast.success(res.data.message)
                }else{
                  toast.error(res.data.message)
                }

                localStorage.setItem("user", JSON.stringify(res.data.user))
                // localStorage.setItem("token", JSON.stringify(res.data.token));
    } catch (error) {
      // console.log(error)
      toast.error(error.response.data.message);
    }
  }
  return (
   
  <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-950 px-4">
    <div className="w-full max-w-md bg-white dark:bg-slate-900 shadow-xl rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
      <div className="pt-10 pb-6 flex flex-col items-center">
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-white text-3xl">
            auto_stories
          </span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          <span className="text-blue-500">Re</span>Blog
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
          Sign up to your creator account
        </p>
      </div>

      {/* <div className="px-8 mb-4">
<div className="w-full h-32 bg-primary/10 rounded-lg overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" data-alt="Abstract blue geometric pattern for blog background"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="material-symbols-outlined text-primary/40 text-5xl">edit_note</span>
</div>
</div>
</div> */}

      <form onSubmit={handleRegister} className="px-8 pb-10 space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            Name
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
              Person
            </span>
            <input
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
              placeholder="Ram charan"
              type="text"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            Email address
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
              mail
            </span>
            <input
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
              placeholder="name@example.com"
              type="email"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Password
            </label>
            <a
              className="text-xs font-semibold text-primary hover:underline"
              href="#"
            >
              Forgot password?
            </a>
          </div>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
              lock
            </span>
            <input
              className="w-full pl-10 pr-12 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
              placeholder="••••••••"
              type="password"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              type="button"
            >
              <span className="material-symbols-outlined text-xl">
                visibility
              </span>
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <input
            className="h-4 w-4 text-primary focus:ring-primary border-slate-300 rounded"
            id="remember-me"
            type="checkbox"
          />
          <label
            className="ml-2 block text-sm text-slate-600 dark:text-slate-400"
            for="remember-me"
          >
            Remember me
          </label>
        </div>
        <button
          className="w-full bg-primary bg-blue-500 hover:bg-blue-700 hover:text-white text-black font-semibold py-3 rounded-lg shadow-lg shadow-primary/30 transition-all active:scale-[0.98]"
          type="submit"
        >
          Sign up to Workspace
        </button>
        {/* <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-slate-900 text-slate-500">
              Or continue with
            </span>
          </div>
        </div> */}
        {/* <div className="grid grid-cols-1 gap-4">
          <button
            className="flex items-center justify-center px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            type="button"
          >
            <img
              className="w-5 h-5 mr-2"
              data-alt="Google brand logo"
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
            />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Google
            </span>
          </button>
        </div> */}
      </form>
      <div className="bg-slate-50 dark:bg-slate-800/50 py-6 px-8 text-center border-t border-slate-200 dark:border-slate-800">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Already have an account?
          <Link to={'/signin'} className="font-bold text-primary hover:underline" href="#">
            {" "}
            Sign in
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
}

export default Signup