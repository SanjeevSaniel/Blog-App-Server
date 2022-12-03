const fs = require("fs");

const hollywoodArticles = JSON.parse(
  fs.readFileSync("./public/api/Hollywood.json")
);

const hollywoodAds = JSON.parse(
  fs.readFileSync("./public/api/HollywoodAds.json")
);

const hollywoodTopPosts = JSON.parse(
  fs.readFileSync("./public/api/HollywoodTopPosts.json")
);

module.exports.hollywoodArticles = hollywoodArticles;
module.exports.hollywoodAds = hollywoodAds;
module.exports.hollywoodTopPosts = hollywoodTopPosts;
