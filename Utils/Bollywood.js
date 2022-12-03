const fs = require("fs");

const bollywoodArticles = JSON.parse(
  fs.readFileSync("./public/api/Bollywood.json")
);

const bollywoodAds = JSON.parse(
  fs.readFileSync("./public/api/BollywoodAds.json")
);

const bollywoodTopPosts = JSON.parse(
  fs.readFileSync("./public/api/BollywoodTopPosts.json")
);

module.exports.bollywoodArticles = bollywoodArticles;
module.exports.bollywoodAds = bollywoodAds;
module.exports.bollywoodTopPosts = bollywoodTopPosts;
