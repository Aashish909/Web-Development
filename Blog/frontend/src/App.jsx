import React from "react";
import Blogs from "./pages/Blogs";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import CreateBlog from "./pages/CreateBlog";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import PageNotFound from "./pages/PageNotFound";
import BlogCard from "./components/BlogCard";
import AddBlog from "./pages/AddBlog";
import BlogPage from "./pages/BlogPage";

function App() {
  
  return (
    <div className="  ">
      <Toaster position="top-center" />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/create-blog" element={<AddBlog />}></Route>
          <Route path="/edit-blog/:id" element={<AddBlog  edit={true}/>}></Route>
          <Route path="/blog/:id" element={<BlogPage />}></Route>
          {/* <Route path="/create-blog" element={<CreateBlog />}></Route> */}
        </Route>

        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
