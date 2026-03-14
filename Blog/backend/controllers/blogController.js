const BlogModel = require("../models/blogModel");
const CommentModel = require("../models/commentModel");
const UserModel = require("../models/userModel");
const { verifyJWT, decodeJWT } = require("../utils/generateToken");
const uniqId = require("uniqid");
const {
  uploadImage,
  deleteImagefromCloudinary,
} = require("../utils/uploadImage");
const fs = require("fs");
const ShortUniqueId = require("short-unique-id");
const { randomUUID } = new ShortUniqueId({ length: 10 });

async function createBlog(req, res) {
  try {
    const creator = req.user;
    const { title, description, draft, content } = req.body;
    const image = req.file;

    console.log({title, description, content})

    // if (!title) {
    //   return res.status(400).json({ message: "Title is required" });
    // }

    // if (!description) {
    //   return res.status(400).json({ message: "Description is required" });
    // }

    // if (!image) {
    //   return res.status(400).json({ message: "Image is required" });
    // }
    // if (!content) {
    //   return res.status(400).json({ message: "Content is required" });
    // }

    // const findUser = await UserModel.findById(creator);

    // if (!findUser) {
    //   return res.status(404).json({ message: "User not found" });
    // }

    // const { secure_url, public_id } = await uploadImage(image.path);

    // fs.unlinkSync(image.path);

    // const blogId =
    //   title.toLowerCase().split(" ").join("-") + "-" + randomUUID();

    // const blog = await BlogModel.create({
    //   title,
    //   description,
    //   draft,
    //   creator,
    //   image: secure_url,
    //   imageId: public_id,
    //   blogId,
    //   content
    // });

    // await UserModel.findByIdAndUpdate(creator, {
    //   $push: { blogs: blog._id },
    // });

    // return res.status(201).json({
    //   message: "Blog created successfully",
    //   blog,
    // });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function getBlog(req, res) {
  try {
    const { blogId } = req.params;

    const blog = await BlogModel.findOne({ blogId })
      .populate({
        path: "comments",
        populate: {
          path: "user",
          select: "name email",
        },
      })
      .populate({
        path: "creator",
        select: "name email",
      });

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    return res.status(200).json({
      message: "Blog fetched successfully",
      blog,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function getBlogs(req, res) {
  try {
    const blogs = await BlogModel.find({ draft: false })
      .populate({
        path: "creator",
        select: "-password",
      })
      .populate({
        path: "likes",
        select: "email name",
      });

    return res.status(200).json({
      message: "All blogs fetched successfully",
      blogs,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function updateBlog(req, res) {
  try {
    const creator = req.user;
    const { id } = req.params;
    const { title, description, draft } = req.body;
    const image = req.file;

    const blog = await BlogModel.findOne({ blogId: id });

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    if (blog.creator.toString() !== creator.toString()) {
      return res.status(403).json({
        message: "You are not authorized",
      });
    }

    let updateData = { title, description, draft };

    if (image) {
      if (blog.imageId) {
        await deleteImagefromCloudinary(blog.imageId);
      }

      const uploadResult = await uploadImage(image.path);

      if (uploadResult) {
        updateData.image = uploadResult.secure_url;
        updateData.imageId = uploadResult.public_id;
      }

      if (fs.existsSync(image.path)) {
        fs.unlinkSync(image.path);
      }
    }

    const updatedBlog = await BlogModel.findByIdAndUpdate(
      blog._id,
      updateData,
      { new: true },
    );

    return res.status(200).json({
      message: "Blog updated successfully",
      blog: updatedBlog,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

async function deleteBlog(req, res) {
  try {
    const { id } = req.params;
    const creator = req.user;

    const blog = await BlogModel.findById(id);

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    if (blog.creator.toString() !== creator.toString()) {
      return res.status(403).json({
        message: "You are not authorized",
      });
    }

    if (blog.imageId) {
      await deleteImagefromCloudinary(blog.imageId);
    }

    await BlogModel.findByIdAndDelete(id);

    await UserModel.findByIdAndUpdate(creator, {
      $pull: { blogs: id },
    });

    return res.status(200).json({
      message: "Blog deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function likeBlog(req, res) {
  try {
    const creator = req.user;
    const { id } = req.params;

    const blog = await BlogModel.findById(id);

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    if (!blog.likes.includes(creator)) {
      await BlogModel.findByIdAndUpdate(id, {
        $push: { likes: creator },
      });

      return res.status(200).json({
        message: "Blog liked successfully",
      });
    } else {
      await BlogModel.findByIdAndUpdate(id, {
        $pull: { likes: creator },
      });

      return res.status(200).json({
        message: "Blog unliked successfully",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = {
  createBlog,
  getBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
  likeBlog,
};
