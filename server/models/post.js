const mongoose = require("mongoose");

const PostCreate = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  author: {
    type: String
  },
  date: {
    type: String
  }
});

const Post = mongoose.model("Post", PostCreate);
module.exports = Post;