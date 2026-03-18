import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Checklist from "@editorjs/checklist";
import Quote from "@editorjs/quote";
import Code from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import Embed from "@editorjs/embed";
import Marker from "@editorjs/marker";
import Underline from "@editorjs/underline";
import ImageTool from "@editorjs/image";

const AddBlog = () => {
  const { id } = useParams();
  const editorjsRef = useRef(null);

  const formData = new FormData()

  // console.log(id)
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    image: null,
    content: "",
  });
  const [preview, setPreview] = useState(null);

  // const token = JSON.parse(localStorage.getItem("token"));
  const { token } = useSelector((slice) => slice.userSlice);
  const { title, description, image, content } = useSelector(
    (slice) => slice.selectedBlogSlice,
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      return navigate("/signin");
    }
  }, []);

  async function fetchBlog() {
    try {
      const res = await axios.get(`http://localhost:3000/api/v1/blogs/${id}`);
      // console.log(res);
      setBlogData({
        title: res.data.blog.title,
        description: res.data.blog.description,
        image: res.data.blog.image,
      });
      if (id) {
        setPreview(res.data.blog.image);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }

    setBlogData({
      title: title,
      description: description,
      image: image,
      content: content
    });
    setPreview(image);
  }

  async function handlePostBlog() {
    // console.log(blogData);
    formData.append("title", blogData.title)
    formData.append("description", blogData.description)
    formData.append("image", blogData.image)
    formData.append("content", JSON.stringify(blogData.content));

    // const images = [];

    blogData.content.blocks.forEach((block)=> {
      if(block.type == 'image'){
        // images.push(block.data.file.image)
        formData.append("images", block.data.file.image);
      }
    })


    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/blogs`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      // console.log(response);
      toast.success(response.data.message);
      navigate("/");
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.message || "Server error");
    }
  }
  async function handleUpdateBlog() {
    // console.log(blogData)

    let formData = new FormData()
    formData.append("title", blogData.title)
    formData.append("description", blogData.description)
    formData.append("image", blogData.image)
    formData.append("content", JSON.stringify(blogData.content))

    let existingImages = [];

    blogData.content.blocks.forEach((block) => {
      if (block.type == "image" ) {
        if (block.data.file.image){
          // images.push(block.data.file.image)
          formData.append("images", block.data.file.image)
        
      }else{
        existingImages.push({
          url: block.data.file.url,
          imageId: block.data.file.imageId
        });
      }
      }
    });
    // for(let data of formData.entries()){
    //   console.log(data)

    // }

    // console.log(existingImages)

    formData.append("existingImages", JSON.stringify(existingImages))
    
    
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_BACKEND_URL}/blogs/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(response);
      toast.success(response.data.message);
      navigate("/");
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.statusText || "Server error");
    }
  }

  function initializeEditorjs() {
    editorjsRef.current = new EditorJS({
      holder: "editorjs",
      placeholder: "Write your story...",
      data: content,
      tools: {
        header: {
          class: Header,
          inlineToolbar: true,
          config: {
            placeholder: "Enter a header",
            levels: [2, 3, 4],
            defaultLevel: 3,
          },
        },
        list: {
          class: List,
          inlineToolbar: true,
          config: { defaultStyle: "unordered" },
        },
        Marker: Marker,
        Underline: Underline,
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
          config: {
            quotePlaceholder: "Enter a quote",
            captionPlaceholder: "Quote's author",
          },
        },
        code: Code,
        delimiter: Delimiter,
        inlineCode: {
          class: InlineCode,
          shortcut: "CMD+SHIFT+M",
        },
        embed: {
          class: Embed,
          config: {
            services: {
              youtube: true,
              twitter: true,
              codepen: true,
            },
          },
        },
        image : {
          class: ImageTool,
          config: {
            uploader: {
              uploadByFile : async (image)=> {
                // console.log(image)
                return {
                  success: 1,
                  file: {
                    url: URL.createObjectURL(image),
                    image
                  }
                }
              }
            }
          }
        }
      },
      onChange: async () => {
        let data = await editorjsRef.current.save();
        // console.log(data)

        setBlogData((blogData) => ({
          ...blogData,
          content: data,
        }));
      },
    });
  }

  useEffect(() => {
    if (id) {
      fetchBlog();
    }
  }, [id]);
  useEffect(() => {
    if (editorjsRef.current == null) {
      initializeEditorjs();
    }
    return () => {
      editorjsRef.current = null;
    };
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="layout-container flex h-full grow flex-col">
        <main className="flex-1 flex justify-center py-8 px-4">
          <div className="max-w-4xl w-full flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex flex-col gap-1">
                <h1 className="text-slate-900 dark:text-slate-100 text-3xl lg:text-4xl font-black tracking-tight">
                  {id ? "Edit Your Post" : "Create New Post"}
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-base">
                  Craft your story and share it with your audience.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex-1 md:flex-none px-6 h-11 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                  Save as Draft
                </button>
                <button
                  onClick={id ? handleUpdateBlog : handlePostBlog}
                  className="flex-1 md:flex-none px-6 h-11 rounded-lg bg-primary text-white font-bold text-sm hover:opacity-90 shadow-lg shadow-primary/20 transition-all"
                >
                  {id ? "Edit Post" : "Publish Post"}
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">
                      Post Title
                    </label>
                    <input
                      value={blogData.title}
                      className="w-full rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all h-12 px-4 placeholder:text-slate-400"
                      placeholder="e.g. 10 Tips for Better Web Design"
                      type="text"
                      onChange={(e) =>
                        setBlogData((prev) => ({
                          ...prev,
                          title: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">
                      Category
                    </label>
                    <div className="relative">
                      <select className="w-full appearance-none rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all h-12 px-4 pr-10">
                        <option value="">Select Category</option>
                        <option value="tech">Technology</option>
                        <option value="design">Design</option>
                        <option value="lifestyle">Lifestyle</option>
                        <option value="business">Business</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        expand_more
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">
                    Cover Image
                  </label>
                  <div className="relative group border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50/50 dark:bg-slate-950/30 hover:bg-slate-50 dark:hover:bg-slate-950/50 hover:border-primary/50 transition-all">
                    <input
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      type="file"
                      accept="image/png, image/jpeg, image/jpg"
                      onChange={(e) => {
                        const file = e.target.files[0];

                        if (file) {
                          setBlogData((prev) => ({
                            ...prev,
                            image: file,
                          }));

                          setPreview(URL.createObjectURL(file));
                        }
                      }}
                    />
                    {preview ? (
                      <div className="relative">
                        <img
                          src={preview}
                          alt="Preview"
                          className="w-full h-64 object-cover rounded-xl"
                        />

                        <button
                          type="button"
                          onClick={() => {
                            setPreview(null);
                            setBlogData((prev) => ({ ...prev, image: "" }));
                          }}
                          className="absolute top-3 right-3 bg-black/60 text-white px-3 py-1 rounded-lg text-sm"
                        >
                          Change Image
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <span className="material-symbols-outlined text-primary text-3xl">
                            add_photo_alternate
                          </span>
                        </div>
                        <h3 className="text-slate-900 dark:text-slate-100 font-bold mb-1">
                          Click to upload or drag and drop
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">
                          PNG, JPG (max 5MB)
                        </p>
                      </div>
                    )}

                    {/* <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-primary text-3xl">
                          add_photo_alternate
                        </span>
                      </div>
                      <h3 className="text-slate-900 dark:text-slate-100 font-bold mb-1">
                        Click to upload or drag and drop
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">
                        SVG, PNG, JPG or GIF (max. 1200x630px, 5MB)
                      </p>
                    </div> */}
                  </div>
                  <div id="editorjs"></div>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="flex flex-wrap items-center gap-1 p-2 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50">
                  <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded transition-colors text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-xl">
                      format_bold
                    </span>
                  </button>
                  <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded transition-colors text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-xl">
                      format_italic
                    </span>
                  </button>
                  <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded transition-colors text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-xl">
                      format_underlined
                    </span>
                  </button>
                  <div className="w-px h-6 bg-slate-200 dark:border-slate-800 mx-1"></div>
                  <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded transition-colors text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-xl">
                      format_list_bulleted
                    </span>
                  </button>
                  <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded transition-colors text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-xl">
                      format_list_numbered
                    </span>
                  </button>
                  <div className="w-px h-6 bg-slate-200 dark:border-slate-800 mx-1"></div>
                  <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded transition-colors text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-xl">
                      link
                    </span>
                  </button>
                  <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded transition-colors text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-xl">
                      image
                    </span>
                  </button>
                  <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded transition-colors text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-xl">
                      code
                    </span>
                  </button>
                </div>
                <div className="p-8 min-h-[400px]">
                  <input
                    value={blogData.description}
                    className="editor-placeholder outline-none text-slate-800 dark:text-slate-200 text-lg leading-relaxed prose prose-slate dark:prose-invert max-w-none"
                    contentEditable={true}
                    placeholder="Start writing your story here..."
                    onChange={(e) =>
                      setBlogData((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 flex justify-between items-center text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <div className="flex gap-4">
                    <span>0 words</span>
                    <span>0 characters</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Auto-saved at 10:42 AM</span>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-slate-900 dark:text-slate-100 font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    label
                  </span>
                  Tags &amp; Metadata
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">
                      Tags (comma separated)
                    </label>
                    <input
                      className="w-full rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all h-10 px-4 placeholder:text-slate-400"
                      placeholder="e.g. tutorial, design, ui-ux"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">
                      Short Excerpt
                    </label>
                    <textarea
                      className="w-full rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all h-24 p-4 placeholder:text-slate-400 resize-none"
                      placeholder="A brief description for social media and search engines..."
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:hidden flex gap-3 mt-4">
              <button className="flex-1 px-6 h-12 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-bold text-sm">
                Draft
              </button>
              <button className="flex-1 px-6 h-12 rounded-lg bg-primary text-white font-bold text-sm">
                Publish
              </button>
            </div>
          </div>
        </main>
        <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 py-8 px-6 bg-white dark:bg-slate-900">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                verified
              </span>
              <span>All changes saved locally</span>
            </div>
            <div className="flex gap-6">
              <a className="hover:text-primary transition-colors" href="#">
                Help Center
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Keyboard Shortcuts
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Community Guidelines
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AddBlog;
