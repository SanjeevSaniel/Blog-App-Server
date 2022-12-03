const mongoose = require("mongoose");

const FitnessArticles = mongoose.model(
  "FitnessArticles",
  mongoose.Schema({
    photoUrl: String,
    link: String,
    title: String,
    description: String,
    category: String,
    date: String,
  })
);

const FitnessAds = mongoose.model(
  "FitnessAds",
  mongoose.Schema({
    title: String,
    link: String,
  })
);

const FitnessTopPosts = mongoose.model(
  "FitnessTopPosts",
  mongoose.Schema({
    imageURL: String,
    link: String,
    title: String,
    category: String,
    date: String,
  })
);

module.exports.FitnessArticles = FitnessArticles;
module.exports.FitnessAds = FitnessAds;
module.exports.FitnessTopPosts = FitnessTopPosts;
