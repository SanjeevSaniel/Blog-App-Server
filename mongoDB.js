const { Article, HomeLatest, HomeAds } = require("./models/Models");

const fs = require("fs");
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/blogData")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const articlesData = JSON.parse(fs.readFileSync("./public/api/Articles.json"));
const homeLatestData = JSON.parse(
  fs.readFileSync("./public/api/ArticlesHorizontal.json")
);
const homeAdsData = JSON.parse(fs.readFileSync("./public/api/HomeAds.json"));

// const articleSchema = mongoose.Schema({
//   photoUrl: String,
//   link: String,
//   title: String,
//   description: String,
//   category: String,
//   date: String,
// });

// const homeLatestSchema = mongoose.Schema({
//   url: String,
//   alt: String,
//   caption: String,
//   about: String,
//   category: String,
//   date: String,
//   link: String,
// });

// const Article = mongoose.model("Article", articleSchema);
// const HomeLatest = mongoose.model("HomeLatest", homeLatestSchema);

const importData = async (Model, data) => {
  try {
    await Model.create(data);
    console.log(`${data} Imported Successfully`);
    const models = await Model.find();
    console.log(models);
    process.exit();
  } catch (error) {
    console.log("error", error);
  }
};

// importData(HomeLatest, homeLatestData);
importData(HomeAds, homeAdsData);

const getArticles = async () => {
  const articles = await Article.find();
};

// getArticles();
