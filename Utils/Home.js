const fs = require("fs");

const articlesData = JSON.parse(fs.readFileSync("./public/api/Articles.json"));
const homeLatestData = JSON.parse(
  fs.readFileSync("./public/api/ArticlesHorizontal.json")
);
const homeSliderData = JSON.parse(
  fs.readFileSync("./public/api/SliderImages.json")
);
const homeAdsData = JSON.parse(fs.readFileSync("./public/api/HomeAds.json"));
const homeTopPostsData = JSON.parse(
  fs.readFileSync("./public/api/TopArticles.json")
);

module.exports.articlesData = articlesData;
module.exports.homeLatestData = homeLatestData;
module.exports.homeSliderData = homeSliderData;
module.exports.homeAdsData = homeAdsData;
module.exports.homeTopPostsData = homeTopPostsData;
