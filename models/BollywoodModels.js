const mongoose = require("mongoose");

const BollywoodArticles = mongoose.model(
  "BollywoodArticles",
  mongoose.Schema({
    photoUrl: String,
    link: String,
    title: String,
    description: String,
    category: String,
    date: String,
  })
);

const BollywoodAds = mongoose.model(
  "BollywoodAds",
  mongoose.Schema({
    title: String,
    link: String,
  })
);

const BollywoodTopPosts = mongoose.model(
  "BollywoodTopPosts",
  mongoose.Schema({
    imageURL: String,
    link: String,
    title: String,
    category: String,
    date: String,
  })
);

module.exports.BollywoodArticles = BollywoodArticles;
module.exports.BollywoodAds = BollywoodAds;
module.exports.BollywoodTopPosts = BollywoodTopPosts;
