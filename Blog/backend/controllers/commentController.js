const BlogModel = require("../models/blogModel");
const CommentModel = require("../models/commentModel");
const UserModel = require("../models/userModel");
const { verifyJWT, decodeJWT } = require("../utils/generateToken");

async function addComment(req, res) {
  try {
    const creator = req.user;
    const { id } = req.params;

    const { comment } = req.body;

    if (!comment) {
      return res.status(400).json({
        // 400 Bad Request
        message: "Please enter comment",
      });
    }

    const blog = await BlogModel.findById(id);
    if (!blog) {
      return res.status(404).json({
        // 404 Not Found
        message: "Blog not found",
      });
    }
    const newComment = await CommentModel.create({
      comment,
      blog: id,
      user: creator,
    }).then((comment) => {
      return comment.populate({
        path: "user",
        select: "name email",
      });
    });

    await BlogModel.findByIdAndUpdate(id, {
      $push: { comments: newComment._id },
    });

    return res.status(201).json({
      // 201 Created
      status: true,
      message: "Comment added",
      newComment,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
}

async function deleteComment(req, res) {
  try {
    const userId = req.user;
    const { id } = req.params;

    const comment = await CommentModel.findById(id).populate({
      path: "blog",
      select: "creator",
    });

    if (!comment) {
      return res.status(404).json({
        // 404 Not Found
        message: "Comment not found",
      });
    }

    if (comment.user != userId && comment.blog.creator != userId) {
      return res.status(403).json({
        message: "You are not authorized",
      });
    }

    await CommentModel.findByIdAndDelete(id);
    await BlogModel.findByIdAndUpdate(comment.blog._id, {
      $pull: { comments: id },
    });

    return res.status(200).json({
      status: true,
      message: "Comment deleted",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
}

async function editComment(req, res) {
  try {
    const userId = req.user;
    const { id } = req.params;

    const { editComment } = req.body;

    if (!editComment) {
      return res.status(400).json({
        // 400 Bad Request
        message: "Please enter comment",
      });
    }

    const comment = await CommentModel.findById(id);
    if (!comment) {
      return res.status(404).json({
        // 404 Not Found
        message: "Comment not found",
      });
    }

    if (comment.user != userId) {
      return res.status(403).json({
        message: "You are not authorized",
      });
    }

    const editedComment = await CommentModel.findByIdAndUpdate(
      id,
      { comment: editComment },
      { new: true },
    );

    return res.status(200).json({
      status: true,
      message: "Edit comment successfully",
      editedComment,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
}

async function likeComment(req, res) {
  try {
    const userId = req.user;
    const { id } = req.params;

    if (!userId) {
      return res.status(401).json({
        // 401 Unauthorized
        message: "Please sign in to like this comment",
      });
    }

    const comment = await CommentModel.findById(id);
    if (!comment) {
      return res.status(404).json({
        // 404 Not Found
        message: "Comment not found",
      });
    }

    if (!comment.likes.includes(userId)) {
      await CommentModel.findByIdAndUpdate(id, {
        $push: { likes: userId },
      });
      return res.status(200).json({
        // 200 OK
        message: "Comment liked successfully",
      });
    } else {
      await CommentModel.findByIdAndUpdate(id, {
        $pull: { likes: userId },
      });
      return res.status(200).json({
        // 200 OK
        message: "Comment unliked successfully",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
}

module.exports = {
  addComment,
  deleteComment,
  editComment,
  likeComment,
};
