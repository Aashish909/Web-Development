const UserModel = require("../models/userModel")
const bcrypt = require("bcrypt");
const {generateJWT} = require("../utils/generateToken");


async function createUser(req, res) {

    try {
      const {name, email, password} = req.body
      if (!name) {
        return res.status(400).json({ message: "Name is required" });
      }
      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }
      if (!password) {
        return res.status(400).json({ message: "Password is required" });
      }
      const existingUser = await UserModel.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await UserModel.create({ name, email, password: hashedPassword })

      let token = await generateJWT({email: newUser.email, id: newUser._id})

      return res.status(201).json({
        message: "User created successfully",
        user: {
          name: newUser.name,
          email: newUser.email,
          id: newUser._id,
          // blogs: newUser.blogs,
          token,
        },
      });

      
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }



}

async function  login(req, res) {
    try {
      const {  email, password } = req.body;
     
      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }
      if (!password) {
        return res.status(400).json({ message: "Password is required" });
      }
      const existingUser = await UserModel.findOne({ email });

      if (!existingUser) {
        return res.status(400).json({ message: "User not exists" });
      }

      const isPasswordValid = await bcrypt.compare(password, existingUser.password);
      if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
      const user = await UserModel.findOne({ email });

      let token = await generateJWT({
        email: user.email,
        id: user._id,
      });

      return res.status(201).json({
        message: "Login successfully",
        user: {name: existingUser.name, 
              email: existingUser.email,
              id: existingUser._id,
              // blogs: existingUser.blogs 
              token
              },
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}

async function getUsers(req, res) {
  try {
    const users = await UserModel.find({})
    return res.status(200).json({
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function getUser(req,res) {
  const {id} = req.params

  const user = await UserModel.findOne({id})  
  if(!user){
    return res.status(404).json({ message: "User not found" });
  }
  return res.status(200).json({
    message: "User fetched successfully",
    data: user,
  });
}

async function updateUser(req, res) {
  try {
    const {id} =req.params;
    const {name, email, password} = req.body

    const user = await UserModel.findOne({id})
    if(!user){
      return res.status(404).json({ message: "User not found" });
    }
    const updatedUser = await UserModel.findByIdAndUpdate({id}, {name, email, password}, {new: true})

    return res.status(200).json({
      message: "User updated successfully",
      data: updatedUser,
    });
    
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function deleteUser(req, res) {
  try {
    const {id} = req.params
    const user = await UserModel.findOne({id})
    if(!user){
      return res.status(404).json({ message: "User not found" });
    }
    await UserModel.findByIdAndDelete({id})
    return res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createUser,
  login,
  getUsers,
  getUser,
  updateUser,
  deleteUser
}