const cloudinary = require("cloudinary").v2;

async function uploadImage(imagePath) {
 try {
   const result = await cloudinary.uploader.upload(imagePath, {
     folder: "mern-blog",
   });

  //  console.log(result);
  return result;
 } catch (error) {
  console.log(error)
 }
}

async function deleteImagefromCloudinary(imageId){
  try {
    await cloudinary.uploader.destroy(imageId)
  } catch (error) {
    console.log(error);
  }
}

module.exports = {uploadImage, deleteImagefromCloudinary}