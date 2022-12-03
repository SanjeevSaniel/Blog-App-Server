const mongoose = require("mongoose");

const HollywoodArticles = mongoose.model(
  "HollywoodArticles",
  mongoose.Schema({
    photoUrl: String,
    link: String,
    title: String,
    description: String,
    category: String,
    date: String,
  })
);

const HollywoodAds = mongoose.model(
  "HollywoodAds",
  mongoose.Schema({
    title: String,
    link: String,
  })
);

const HollywoodTopPosts = mongoose.model(
  "HollywoodTopPosts",
  mongoose.Schema({
    imageURL: String,
    link: String,
    title: String,
    category: String,
    date: String,
  })
);

module.exports.HollywoodArticles = HollywoodArticles;
module.exports.HollywoodAds = HollywoodAds;
module.exports.HollywoodTopPosts = HollywoodTopPosts;
