const mongoose = require("mongoose");

const FoodArticles = mongoose.model(
  "FoodArticles",
  mongoose.Schema({
    photoUrl: String,
    link: String,
    title: String,
    description: String,
    category: String,
    date: String,
  })
);

const FoodAds = mongoose.model(
  "FoodAds",
  mongoose.Schema({
    title: String,
    link: String,
  })
);

const FoodTopPosts = mongoose.model(
  "FoodTopPosts",
  mongoose.Schema({
    imageURL: String,
    link: String,
    title: String,
    category: String,
    date: String,
  })
);

module.exports.FoodArticles = FoodArticles;
module.exports.FoodAds = FoodAds;
module.exports.FoodTopPosts = FoodTopPosts;
