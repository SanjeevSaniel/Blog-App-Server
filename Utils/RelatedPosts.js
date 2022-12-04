const fs = require("fs");

const relatedPosts = JSON.parse(
  fs.readFileSync("./public/api/RelatedPosts.json")
);

module.exports.relatedPosts = relatedPosts;
