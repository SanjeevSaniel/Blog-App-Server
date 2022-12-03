const fs = require("fs");

const technologyArticles = JSON.parse(
  fs.readFileSync("./public/api/Bollywood.json")
);

const technologyAds = JSON.parse(
  fs.readFileSync("./public/api/BollywoodAds.json")
);

const technologyTopPosts = JSON.parse(
  fs.readFileSync("./public/api/BollywoodTopPosts.json")
);

module.exports.technologyArticles = technologyArticles;
module.exports.technologyAds = technologyAds;
module.exports.technologyTopPosts = technologyTopPosts;
