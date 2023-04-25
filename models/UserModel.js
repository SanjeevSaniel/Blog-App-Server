const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  mongoose.Schema({
    photoUrl: String,
    link: String,
    title: String,
    description: String,
    category: String,
    date: String,
  })
);

module.exports.User = User;
