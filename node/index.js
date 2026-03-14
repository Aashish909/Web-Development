const express = require("express")

const app = express()
app.use(express.json())

const blogs =[];

app.get("/blogs", (req, res)=>{
 return res.json({blogs})
})

app.post("/blogs", (req, res)=> {
  blogs.push(req.body)
  return res.json({message: "blog created"})
})

app.listen(3000, (req, res)=> {
  console.log("Server started");
  
})