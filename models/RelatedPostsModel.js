const mongoose = require("mongoose");

const RelatedPosts = mongoose.model(
  "RelatedPosts",
  mongoose.Schema({
    imageURL: String,
    location: String,
    author: String,
    avatar: String,
  })
);

module.exports.RelatedPosts = RelatedPosts;
