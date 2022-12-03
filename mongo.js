const {
  Article,
  HomeLatest,
  HomeSlider,
  HomeAds,
  HomeTopPosts,
} = require("./models/HomeModels");
const {
  articlesData,
  homeLatestData,
  homeAdsData,
  homeSliderData,
  homeTopPostsData,
} = require("./Utils/Home");

const mongoose = require("mongoose");

const url = `mongodb+srv://sanjeev:sanjeev77@cluster0.tl5agnc.mongodb.net/blogData?retryWrites=true&w=majority`;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to database...");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

const importData = async (Model, data) => {
  try {
    await Model.create(data);
    console.log(`Data Imported Successfully`);
    const models = await Model.find();
    console.log(models);
    process.exit();
  } catch (error) {
    console.log("error", error);
  }
};

// importData(Article, articlesData);
// importData(HomeLatest, homeLatestData);
// importData(HomeSlider, homeSliderData);
// importData(HomeAds, homeAdsData);
// importData(HomeTopPosts, homeTopPostsData);
