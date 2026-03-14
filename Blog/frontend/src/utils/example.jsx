// import axios from "axios";
// import React, { useEffect, useRef, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router";
// import { toast } from "sonner";
// import EditorJS from "@editorjs/editorjs";
// import Header from "@editorjs/header";
// import List from "@editorjs/list";
// import Checklist from "@editorjs/checklist";
// import Quote from "@editorjs/quote";
// import Code from "@editorjs/code";
// import Delimiter from "@editorjs/delimiter";
// import InlineCode from "@editorjs/inline-code";
// import Embed from "@editorjs/embed";

// const AddBlog = () => {
//   const { id } = useParams();

//   const [blogData, setBlogData] = useState({
//     title: "",
//     description: "",
//     image: "",
//   });
//   const [preview, setPreview] = useState(null);
//   const [wordCount, setWordCount] = useState(0);
//   const [charCount, setCharCount] = useState(0);
//   const [lastSaved, setLastSaved] = useState(null);

//   const editorRef = useRef(null);
//   const editorInstanceRef = useRef(null);

//   const { token } = useSelector((slice) => slice.userSlice);
//   const { title, description, image } = useSelector(
//     (slice) => slice.selectedBlogSlice
//   );
//   const navigate = useNavigate();

//   // Auth guard
//   useEffect(() => {
//     if (!token) {
//       return navigate("/signin");
//     }
//   }, []);

//   // Fetch blog for edit mode
//   async function fetchBlog() {
//     setBlogData({
//       title: title,
//       description: description,
//       image: image,
//     });
//     setPreview(image);
//   }

//   useEffect(() => {
//     if (id) {
//       fetchBlog();
//     }
//   }, [id]);

//   // Initialize EditorJS
//   useEffect(() => {
//     // Avoid double initialization
//     if (editorInstanceRef.current) return;

//     // Parse existing description if editing
//     let initialData = undefined;
//     if (id && description) {
//       try {
//         initialData = JSON.parse(description);
//       } catch {
//         // description is plain text — wrap it as a paragraph block
//         initialData = {
//           blocks: [{ type: "paragraph", data: { text: description } }],
//         };
//       }
//     }

//     const editor = new EditorJS({
//       holder: "editorjs-holder",
//       placeholder: "Tell your story...",
//       inlineToolbar: ["bold", "italic", "link", "inlineCode"],
//       tools: {
//         header: {
//           class: Header,
//           config: { levels: [1, 2, 3], defaultLevel: 2 },
//           shortcut: "CMD+SHIFT+H",
//         },
//         list: {
//           class: List,
//           inlineToolbar: true,
//           config: { defaultStyle: "unordered" },
//         },
//         checklist: {
//           class: Checklist,
//           inlineToolbar: true,
//         },
//         quote: {
//           class: Quote,
//           inlineToolbar: true,
//           config: {
//             quotePlaceholder: "Enter a quote",
//             captionPlaceholder: "Quote's author",
//           },
//         },
//         code: Code,
//         delimiter: Delimiter,
//         inlineCode: {
//           class: InlineCode,
//           shortcut: "CMD+SHIFT+M",
//         },
//         embed: {
//           class: Embed,
//           config: {
//             services: {
//               youtube: true,
//               twitter: true,
//               codepen: true,
//             },
//           },
//         },
//       },
//       data: initialData,
//       onChange: async (api) => {
//         const savedData = await api.saver.save();
//         // Count words/chars from all text blocks
//         const allText = savedData.blocks
//           .map((b) => {
//             if (b.data?.text) return b.data.text.replace(/<[^>]*>/g, "");
//             if (b.data?.items) return b.data.items.join(" ");
//             if (b.data?.quote) return b.data.quote;
//             return "";
//           })
//           .join(" ")
//           .trim();

//         setWordCount(allText ? allText.split(/\s+/).filter(Boolean).length : 0);
//         setCharCount(allText.length);
//         setLastSaved(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
//       },
//     });

//     editorInstanceRef.current = editor;

//     return () => {
//       if (
//         editorInstanceRef.current &&
//         typeof editorInstanceRef.current.destroy === "function"
//       ) {
//         editorInstanceRef.current.destroy();
//         editorInstanceRef.current = null;
//       }
//     };
//   }, []); // Run once on mount

//   // Collect editor content and call API
//   async function getEditorContent() {
//     if (!editorInstanceRef.current) return null;
//     try {
//       const data = await editorInstanceRef.current.save();
//       return JSON.stringify(data);
//     } catch (err) {
//       console.error("Editor save failed:", err);
//       return null;
//     }
//   }

//   async function handlePostBlog() {
//     const editorContent = await getEditorContent();
//     if (!editorContent) return toast.error("Content is empty");

//     const payload = { ...blogData, description: editorContent };
//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_BACKEND_URL}/blogs`,
//         payload,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       toast.success(response.data.message);
//       navigate("/");
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Server error");
//     }
//   }

//   async function handleUpdateBlog() {
//     const editorContent = await getEditorContent();
//     if (!editorContent) return toast.error("Content is empty");

//     const payload = { ...blogData, description: editorContent };
//     try {
//       const response = await axios.patch(
//         `${import.meta.env.VITE_BACKEND_URL}/blogs/${id}`,
//         payload,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       toast.success(response.data.message);
//       navigate("/");
//     } catch (error) {
//       toast.error(error.response?.statusText || "Server error");
//     }
//   }

//   return (
//     <>
//       {/* EditorJS global styles — injected once */}
//       <style>{`
//         /* ── EditorJS core overrides ── */
//         #editorjs-holder {
//           font-family: inherit;
//         }
//         .codex-editor__redactor {
//           padding-bottom: 120px !important;
//         }
//         /* Paragraph */
//         .ce-paragraph {
//           font-size: 1.125rem;
//           line-height: 1.8;
//           color: inherit;
//         }
//         .ce-paragraph[data-placeholder]:empty::before {
//           color: #94a3b8;
//         }
//         /* Headers */
//         .ce-header {
//           font-weight: 800;
//           line-height: 1.3;
//           padding: 0;
//         }
//         h1.ce-header { font-size: 2rem; }
//         h2.ce-header { font-size: 1.5rem; }
//         h3.ce-header { font-size: 1.25rem; }
//         /* Quote */
//         .cdx-quote {
//           border-left: 4px solid #6366f1;
//           padding-left: 1.25rem;
//           margin: 0;
//         }
//         .cdx-quote__text {
//           font-size: 1.2rem;
//           font-style: italic;
//           color: inherit;
//           min-height: 1.5em;
//         }
//         .cdx-quote__caption {
//           font-size: 0.875rem;
//           color: #94a3b8;
//           margin-top: 0.5rem;
//         }
//         /* Code block */
//         .ce-code__textarea {
//           background: #0f172a;
//           color: #e2e8f0;
//           font-family: 'JetBrains Mono', 'Fira Code', monospace;
//           font-size: 0.875rem;
//           border-radius: 0.5rem;
//           border: 1px solid #1e293b;
//           padding: 1rem;
//           line-height: 1.7;
//           resize: vertical;
//         }
//         /* Inline code */
//         .inline-code {
//           background: rgba(99, 102, 241, 0.12);
//           color: #818cf8;
//           border-radius: 4px;
//           padding: 2px 6px;
//           font-family: 'JetBrains Mono', monospace;
//           font-size: 0.875em;
//         }
//         /* List */
//         .cdx-list {
//           font-size: 1.1rem;
//           line-height: 1.75;
//         }
//         .cdx-list__item {
//           padding: 2px 0;
//         }
//         /* Checklist */
//         .cdx-checklist__item-checkbox {
//           border-color: #6366f1;
//         }
//         .cdx-checklist__item--checked .cdx-checklist__item-checkbox {
//           background: #6366f1;
//           border-color: #6366f1;
//         }
//         /* Delimiter */
//         .ce-delimiter::before {
//           color: #6366f1;
//           font-size: 1.5rem;
//           letter-spacing: 0.5em;
//         }
//         /* Toolbar */
//         .ce-toolbar__plus {
//           color: #6366f1;
//         }
//         .ce-toolbar__plus:hover {
//           background: rgba(99, 102, 241, 0.1);
//         }
//         .ce-toolbox__button:hover,
//         .ce-inline-toolbar__dropdown:hover,
//         .ce-inline-tool:hover {
//           background: rgba(99, 102, 241, 0.12) !important;
//           color: #6366f1 !important;
//         }
//         .ce-toolbar__settings-btn:hover {
//           background: rgba(99, 102, 241, 0.1);
//         }
//         /* Dark mode overrides */
//         .dark .ce-paragraph,
//         .dark .ce-header,
//         .dark .cdx-quote__text {
//           color: #e2e8f0;
//         }
//         .dark .codex-editor svg {
//           color: #94a3b8;
//         }
//         .dark .ce-toolbar__content,
//         .dark .ce-popover,
//         .dark .ce-inline-toolbar {
//           background: #1e293b;
//           border-color: #334155;
//           box-shadow: 0 4px 24px rgba(0,0,0,0.4);
//         }
//         .dark .ce-popover-item:hover,
//         .dark .ce-popover-item--focused {
//           background: rgba(99, 102, 241, 0.15);
//         }
//         .dark .ce-popover-item__title,
//         .dark .ce-popover-item__secondary-title {
//           color: #e2e8f0;
//         }
//         .dark .ce-inline-tool,
//         .dark .ce-inline-toolbar__dropdown {
//           color: #94a3b8;
//         }
//         .dark .ce-conversion-toolbar,
//         .dark .ce-conversion-tool {
//           background: #1e293b;
//           color: #e2e8f0;
//           border-color: #334155;
//         }
//         .dark .cdx-list,
//         .dark .cdx-checklist__item-text,
//         .dark .cdx-checklist__item {
//           color: #e2e8f0;
//         }
//       `}</style>

//       <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
//         <div className="layout-container flex h-full grow flex-col">
//           <main className="flex-1 flex justify-center py-8 px-4">
//             <div className="max-w-4xl w-full flex flex-col gap-8">

//               {/* Header */}
//               <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
//                 <div className="flex flex-col gap-1">
//                   <h1 className="text-slate-900 dark:text-slate-100 text-3xl lg:text-4xl font-black tracking-tight">
//                     {id ? "Edit Your Post" : "Create New Post"}
//                   </h1>
//                   <p className="text-slate-500 dark:text-slate-400 text-base">
//                     Craft your story and share it with your audience.
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <button className="flex-1 md:flex-none px-6 h-11 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
//                     Save as Draft
//                   </button>
//                   <button
//                     onClick={id ? handleUpdateBlog : handlePostBlog}
//                     className="flex-1 md:flex-none px-6 h-11 rounded-lg bg-primary text-white font-bold text-sm hover:opacity-90 shadow-lg shadow-primary/20 transition-all"
//                   >
//                     {id ? "Update Post" : "Publish Post"}
//                   </button>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 gap-6">
//                 {/* Title + Cover Image */}
//                 <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     <div className="md:col-span-2">
//                       <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">
//                         Post Title
//                       </label>
//                       <input
//                         value={blogData.title}
//                         className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all h-12 px-4 placeholder:text-slate-400 outline-none"
//                         placeholder="e.g. 10 Tips for Better Web Design"
//                         type="text"
//                         onChange={(e) =>
//                           setBlogData((prev) => ({
//                             ...prev,
//                             title: e.target.value,
//                           }))
//                         }
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">
//                         Category
//                       </label>
//                       <div className="relative">
//                         <select className="w-full appearance-none rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all h-12 px-4 pr-10 outline-none">
//                           <option value="">Select Category</option>
//                           <option value="tech">Technology</option>
//                           <option value="design">Design</option>
//                           <option value="lifestyle">Lifestyle</option>
//                           <option value="business">Business</option>
//                         </select>
//                         <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
//                           expand_more
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Cover Image */}
//                   <div>
//                     <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">
//                       Cover Image
//                     </label>
//                     <div className="relative group border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50/50 dark:bg-slate-950/30 hover:bg-slate-50 dark:hover:bg-slate-950/50 hover:border-primary/50 transition-all">
//                       <input
//                         className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
//                         type="file"
//                         accept="image/png, image/jpeg, image/jpg"
//                         onChange={(e) => {
//                           const file = e.target.files[0];
//                           if (file) {
//                             setBlogData((prev) => ({ ...prev, image: file }));
//                             setPreview(URL.createObjectURL(file));
//                           }
//                         }}
//                       />
//                       {preview ? (
//                         <div className="relative">
//                           <img
//                             src={preview}
//                             alt="Preview"
//                             className="w-full h-64 object-cover rounded-xl"
//                           />
//                           <button
//                             type="button"
//                             onClick={() => {
//                               setPreview(null);
//                               setBlogData((prev) => ({ ...prev, image: "" }));
//                             }}
//                             className="absolute top-3 right-3 bg-black/60 text-white px-3 py-1 rounded-lg text-sm z-20"
//                           >
//                             Change Image
//                           </button>
//                         </div>
//                       ) : (
//                         <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
//                           <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                             <span className="material-symbols-outlined text-primary text-3xl">
//                               add_photo_alternate
//                             </span>
//                           </div>
//                           <h3 className="text-slate-900 dark:text-slate-100 font-bold mb-1">
//                             Click to upload or drag and drop
//                           </h3>
//                           <p className="text-slate-500 dark:text-slate-400 text-sm">
//                             PNG, JPG (max 5MB)
//                           </p>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 {/* ── Rich Text Editor (EditorJS) ── */}
//                 <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
//                   {/* Toolbar hint bar */}
//                   <div className="flex items-center gap-2 px-5 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50">
//                     <span className="material-symbols-outlined text-primary text-base">
//                       edit_note
//                     </span>
//                     <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
//                       Click the{" "}
//                       <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-xs">
//                         +
//                       </kbd>{" "}
//                       button on any line to insert headers, quotes, code blocks, lists and more
//                     </span>
//                   </div>

//                   {/* Editor mount point */}
//                   <div className="px-8 py-6 min-h-[480px]">
//                     <div
//                       id="editorjs-holder"
//                       ref={editorRef}
//                       className="prose prose-slate dark:prose-invert max-w-none"
//                     />
//                   </div>

//                   {/* Footer stats */}
//                   <div className="px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 flex justify-between items-center text-xs text-slate-500 dark:text-slate-400 font-medium">
//                     <div className="flex gap-4">
//                       <span>{wordCount} word{wordCount !== 1 ? "s" : ""}</span>
//                       <span>{charCount} character{charCount !== 1 ? "s" : ""}</span>
//                     </div>
//                     <div className="flex items-center gap-1.5">
//                       <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
//                       <span>
//                         {lastSaved ? `Auto-saved at ${lastSaved}` : "Unsaved"}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Tags & Metadata */}
//                 <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
//                   <h3 className="text-slate-900 dark:text-slate-100 font-bold mb-4 flex items-center gap-2">
//                     <span className="material-symbols-outlined text-primary">
//                       label
//                     </span>
//                     Tags &amp; Metadata
//                   </h3>
//                   <div className="space-y-4">
//                     <div>
//                       <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">
//                         Tags (comma separated)
//                       </label>
//                       <input
//                         className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all h-10 px-4 placeholder:text-slate-400 outline-none"
//                         placeholder="e.g. tutorial, design, ui-ux"
//                         type="text"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">
//                         Short Excerpt
//                       </label>
//                       <textarea
//                         className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all h-24 p-4 placeholder:text-slate-400 resize-none outline-none"
//                         placeholder="A brief description for social media and search engines..."
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Mobile publish buttons */}
//               <div className="md:hidden flex gap-3 mt-4">
//                 <button className="flex-1 px-6 h-12 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-bold text-sm">
//                   Draft
//                 </button>
//                 <button
//                   onClick={id ? handleUpdateBlog : handlePostBlog}
//                   className="flex-1 px-6 h-12 rounded-lg bg-primary text-white font-bold text-sm"
//                 >
//                   {id ? "Update" : "Publish"}
//                 </button>
//               </div>
//             </div>
//           </main>

//           <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 py-8 px-6 bg-white dark:bg-slate-900">
//             <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
//               <div className="flex items-center gap-2">
//                 <span className="material-symbols-outlined text-primary">
//                   verified
//                 </span>
//                 <span>All changes saved locally</span>
//               </div>
//               <div className="flex gap-6">
//                 <a className="hover:text-primary transition-colors" href="#">Help Center</a>
//                 <a className="hover:text-primary transition-colors" href="#">Keyboard Shortcuts</a>
//                 <a className="hover:text-primary transition-colors" href="#">Community Guidelines</a>
//               </div>
//             </div>
//           </footer>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddBlog;