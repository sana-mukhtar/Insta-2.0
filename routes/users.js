const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/instaclone");
// Define the user schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  username: String,
  name: String,
  bio : String,
  profileImage: {
    type: String, 
  },
  posts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "post"
    }],
});

userSchema.plugin(plm);

// Create the User model
module.exports = mongoose.model("user", userSchema);


