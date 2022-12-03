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

const {
  BollywoodArticles,
  BollywoodAds,
  BollywoodTopPosts,
} = require("./models/BollywoodModels");

const {
  bollywoodArticles,
  bollywoodAds,
  bollywoodTopPosts,
} = require("./Utils/Bollywood");

const {
  HollywoodArticles,
  HollywoodAds,
  HollywoodTopPosts,
} = require("./models/HollywoodModels");

const {
  hollywoodArticles,
  hollywoodAds,
  hollywoodTopPosts,
} = require("./Utils/Hollywood");

const {
  TechnologyArticles,
  TechnologyAds,
  TechnologyTopPosts,
} = require("./models/TechnologyModels");

const {
  technologyArticles,
  technologyAds,
  technologyTopPosts,
} = require("./Utils/Technology");

const {
  FitnessArticles,
  FitnessAds,
  FitnessTopPosts,
} = require("./models/FitnessModels");

const {
  fitnessArticles,
  fitnessAds,
  fitnessTopPosts,
} = require("./Utils/Fitness");

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

// importData(BollywoodArticles, bollywoodArticles);
// importData(BollywoodAds, bollywoodAds);
// importData(BollywoodTopPosts, bollywoodTopPosts);

// importData(HollywoodArticles, hollywoodArticles);
// importData(HollywoodAds, hollywoodAds);
// importData(HollywoodTopPosts, hollywoodTopPosts);

// importData(TechnologyArticles, technologyArticles);
// importData(TechnologyAds, technologyAds);
// importData(TechnologyTopPosts, technologyTopPosts);

// importData(FitnessArticles, fitnessArticles);
// importData(FitnessAds, fitnessAds);
// importData(FitnessTopPosts, fitnessTopPosts);
