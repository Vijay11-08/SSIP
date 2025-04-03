const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullname: String,
  email: { type: String, unique: true },
  password: String,
  gender: String,
  mobile: String,
  profilePic: String,
  token: String,
  verified: { type: Boolean, default: false }
});

module.exports = mongoose.model("User", UserSchema);
