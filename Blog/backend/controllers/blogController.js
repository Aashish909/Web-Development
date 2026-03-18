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
    const { title, description, draft } = req.body;
    const { image, images } = req.files;
    // console.log(image)
    const content =
      typeof req.body.content === "string"
        ? JSON.parse(req.body.content)
        : req.body.content;

    // console.log({image, title, description, content: JSON.parse(req.body.content)})

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    if (!description) {
      return res.status(400).json({ message: "Description is required" });
    }

    if (!image) {
      return res.status(400).json({ message: "Image is required" });
    }
    if (!content) {
      return res.status(400).json({ message: "Content is required" });
    }

    // const findUser = await UserModel.findById(creator);

    // if (!findUser) {
    //   return res.status(404).json({ message: "User not found" });
    // }

    let imageIndex = 0;
    for (let i = 0; i < content.blocks.length; i++) {
      const block = content.blocks[i];
      if (block.type == "image") {
        // console.log(images[imageIndex])
        const { secure_url, public_id } = await uploadImage(
          `data:image/jpeg;base64,${images[imageIndex].buffer.toString("base64")}`,
        );

        // console.log(secure_url, public_id)
        block.data.file = {
          url: secure_url,
          imageId: public_id,
        };
        imageIndex++;
      }
    }

    const { secure_url, public_id } = await uploadImage(
      `data:image/jpeg;base64,${image[0].buffer.toString("base64")}`,
    );

    // fs.unlinkSync(image.path);

    const blogId =
      title.toLowerCase().split(" ").join("-") + "-" + randomUUID();

    const blog = await BlogModel.create({
      title,
      description,
      draft,
      creator,
      image: secure_url,
      imageId: public_id,
      blogId,
      content,
    });

    await UserModel.findByIdAndUpdate(creator, {
      $push: { blogs: blog._id },
    });

    return res.status(201).json({
      message: "Blog created successfully",
      blog,
    });
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
    // const image = req.files;

    const content = JSON.parse(req.body.content);
    const existingImages = JSON.parse(req.body.existingImages);
    // console.log(image, existingImages)

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
    let imagesToDelete = blog.content.blocks
      .filter((block) => block.type == "image")
      .filter((block)=> 
          !existingImages.find(({url})=> url == block.data.file.url))
          .map((block)=> block.data.file.imageId)

    // console.log(imagesToDelete);

    // if(imagesToDelete.length > 0){
    //   await Promise.all(
    //     imagesToDelete.map((id)=> deleteImagefromCloudinary(id))
    //   )
    // }

    if(req.files.images){
      let imageIndex = 0;
      for (let i = 0; i < content.blocks.length; i++) {
        const block = content.blocks[i];
        if (block.type == "image" && block.data.file.image) {
          // console.log(images[imageIndex])
          const { secure_url, public_id } = await uploadImage(
            `data:image/jpeg;base64,${req.files.images[imageIndex].buffer.toString("base64")}`,
          );

          // console.log(secure_url, public_id)
          block.data.file = {
            url: secure_url,
            imageId: public_id,
          };
          imageIndex++;
        }
      }
    }

    let updateData = { title, description, draft };

    if (req.files.image) {
      if (blog.imageId) {
        await deleteImagefromCloudinary(blog.imageId);
      }

      const uploadResult = await uploadImage(
        `data:image/jpeg;base64,${req.files.image[0].buffer.toString("base64")}`,
      );

      if (uploadResult) {
        updateData.image = uploadResult.secure_url;
        updateData.imageId = uploadResult.public_id;
      }

      // if (fs.existsSync(image.path)) {
      //   fs.unlinkSync(image.path);
      // }
    }

  updateData.content = content || updateData.content
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
