const { default: mongoose } = require("mongoose");

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
    trim: true
  },
  blog:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blog"
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  likes: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        },
      ],
},
 
{timestamps: true}
)

const CommentModel = mongoose.model("Comment", CommentSchema)

module.exports = CommentModel
