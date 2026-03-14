
const express = require("express");
const { createBlog, getBlogs, getBlog, updateBlog, deleteBlog, likeBlog} = require("../controllers/blogController");
const verifyUser = require("../middlewares/authMiddleware");
const { addComment, deleteComment, editComment, likeComment } = require("../controllers/commentController");
const upload = require("../utils/multer");
const router = express.Router();

router.post('/blogs',verifyUser, upload.single("image"), createBlog)
// router.post("/blogs", verifyUser,createBlog);
router.get('/blogs', getBlogs)
router.get('/blogs/:blogId', getBlog)
router.patch("/blogs/:id",verifyUser, upload.single("image"), updateBlog);

router.delete('/blogs/:id',verifyUser, deleteBlog)
router.post("/blogs/like/:id", verifyUser, likeBlog);

router.post("/blogs/comment/:id", verifyUser, addComment);
router.delete("/blogs/comment/:id", verifyUser, deleteComment);
router.patch("/blogs/edit-comment/:id", verifyUser, editComment);

router.patch("/blogs/like-comment/:id", verifyUser, likeComment);

module.exports = router;