

const express = require("express");
const cors =require("cors");
const dbConnect = require("./config/dbConnect");
const userRoutes = require("./routes/userRoute")
const blogRoutes = require("./routes/blogRoute");
const cloudinaryConfig = require("./config/cloudinaryConfig");
const dotenv =require("dotenv")
dotenv.config()

const PORT = process.env.PORT
const app = express();

app.use(express.json());
app.use(cors())



app.use('/api/v1', userRoutes)

app.use('/api/v1', blogRoutes)


app.listen(PORT, () =>{
   console.log("Server started"),
   dbConnect(),
   cloudinaryConfig()
   });