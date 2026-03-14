const { default: mongoose } = require("mongoose");

const likeSchema = new mongoose.Schema({
  blog:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blog"
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
},
 
{timestamps: true}
)

const LikeModel = mongoose.model("Like", likeSchema)
module.exports = LikeModel
