const fs = require("fs");

const fitnessArticles = JSON.parse(
  fs.readFileSync("./public/api/Fitness.json")
);

const fitnessAds = JSON.parse(fs.readFileSync("./public/api/FitnessAds.json"));

const fitnessTopPosts = JSON.parse(
  fs.readFileSync("./public/api/FitnessTopPosts.json")
);

module.exports.fitnessArticles = fitnessArticles;
module.exports.fitnessAds = fitnessAds;
module.exports.fitnessTopPosts = fitnessTopPosts;
