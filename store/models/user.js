const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This is the schema for model user on database
const user = new Schema(
  {
    name: String,
    nickName: String,
    email: String,
    profile: String,
  },
  { timestamps: true }
);

module.exports = user;
