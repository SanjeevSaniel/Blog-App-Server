const mongoose = require("mongoose");

const Article = mongoose.model(
  "Article",
  mongoose.Schema({
    photoUrl: String,
    link: String,
    title: String,
    description: String,
    category: String,
    date: String,
  })
);

const HomeLatest = mongoose.model(
  "HomeLatest",
  mongoose.Schema({
    url: String,
    alt: String,
    caption: String,
    about: String,
    category: String,
    date: String,
    link: String,
  })
);

const HomeSlider = mongoose.model(
  "HomeSliderImages",
  mongoose.Schema({
    url: String,
  })
);

const HomeAds = mongoose.model(
  "HomeAds",
  mongoose.Schema({
    title: String,
    link: String,
  })
);

const HomeTopPosts = mongoose.model(
  "HomeTopPosts",
  mongoose.Schema({
    imageURL: String,
    link: String,
    title: String,
    category: String,
    date: String,
  })
);

module.exports.Article = Article;
module.exports.HomeLatest = HomeLatest;
module.exports.HomeSlider = HomeSlider;
module.exports.HomeAds = HomeAds;
module.exports.HomeTopPosts = HomeTopPosts;
