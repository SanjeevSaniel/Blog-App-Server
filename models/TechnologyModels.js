const mongoose = require("mongoose");

const TechnologyArticles = mongoose.model(
  "TechnologyArticles",
  mongoose.Schema({
    photoUrl: String,
    link: String,
    title: String,
    description: String,
    category: String,
    date: String,
  })
);

const TechnologyAds = mongoose.model(
  "TechnologyAds",
  mongoose.Schema({
    title: String,
    link: String,
  })
);

const TechnologyTopPosts = mongoose.model(
  "TechnologyTopPosts",
  mongoose.Schema({
    imageURL: String,
    link: String,
    title: String,
    category: String,
    date: String,
  })
);

module.exports.TechnologyArticles = TechnologyArticles;
module.exports.TechnologyAds = TechnologyAds;
module.exports.TechnologyTopPosts = TechnologyTopPosts;
