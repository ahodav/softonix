const mongoose = require("mongoose");

const UserCreate = new mongoose.Schema({
  userName: {
    type: String,
    index: {
      unique: true, 
    }
  },
  password: {
    type: String
  }
});

const User = mongoose.model("User", UserCreate);
module.exports = User;