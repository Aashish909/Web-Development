const cloudinary = require("cloudinary").v2;
require("dotenv").config();


async function cloudinaryConfig(){
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_SECRET_KEY,
    });

    console.log("Cloudinary config successfull")
  } catch (error) {
    console.log("Error in cloudinary config")
    console.log(error)
  }
}

module.exports = cloudinaryConfig;