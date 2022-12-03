const fs = require("fs");

const foodArticles = JSON.parse(fs.readFileSync("./public/api/Food.json"));

const foodAds = JSON.parse(fs.readFileSync("./public/api/FoodAds.json"));

const foodTopPosts = JSON.parse(
  fs.readFileSync("./public/api/FoodTopPosts.json")
);

module.exports.foodArticles = foodArticles;
module.exports.foodAds = foodAds;
module.exports.foodTopPosts = foodTopPosts;
