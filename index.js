const {
  Article,
  HomeLatest,
  HomeAds,
  HomeSlider,
  HomeTopPosts,
} = require("./models/HomeModels");

const {
  BollywoodArticles,
  BollywoodAds,
  BollywoodTopPosts,
} = require("./models/BollywoodModels");

const {
  HollywoodArticles,
  HollywoodAds,
  HollywoodTopPosts,
} = require("./models/HollywoodModels");

const {
  TechnologyArticles,
  TechnologyAds,
  TechnologyTopPosts,
} = require("./models/TechnologyModels");

const {
  FitnessArticles,
  FitnessAds,
  FitnessTopPosts,
} = require("./models/FitnessModels");

const { FoodArticles, FoodAds, FoodTopPosts } = require("./models/FoodModels");

const { RelatedPosts } = require("./models/RelatedPostsModel");

const path = require("path");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const database = "blogData";

mongoose
  .connect(
    `mongodb+srv://sanjeev:sanjeev77@cluster0.tl5agnc.mongodb.net/${database}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((error) => console.error("Couldn't connect to MongoDB...", error));

app.use(cors());
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).send("This is from Express");
});

// const Article = mongoose.model(
//   "Article",
//   mongoose.Schema({
//     photoUrl: String,
//     link: String,
//     title: String,
//     description: String,
//     category: String,
//     date: String,
//   })
// );

app.get("/Articles", (req, res) => {
  const getArticles = async () => {
    const articles = await Article.find();
    res.send(articles);
  };

  getArticles();
});

// const HomeLatest = mongoose.model(
//   "HomeLatest",
//   mongoose.Schema({
//     url: String,
//     alt: String,
//     caption: String,
//     about: String,
//     category: String,
//     date: String,
//     link: String,
//   })
// );

app.get("/HomeLatest", (req, res) => {
  const getHomeLatest = async () => {
    const articles = await HomeLatest.find();
    res.send(articles);
  };

  getHomeLatest();
});

app.get("/HomeAds", (req, res) => {
  const getHomeAds = async () => {
    const articles = await HomeAds.find();
    res.send(articles);
  };

  getHomeAds();
});

app.get("/HomeSlider", (req, res) => {
  const getHomeSliderImages = async () => {
    const articles = await HomeSlider.find();
    res.send(articles);
  };

  getHomeSliderImages();
});

app.get("/HomeTopPosts", (req, res) => {
  const getHomeTopPosts = async () => {
    const articles = await HomeTopPosts.find();
    res.send(articles);
  };

  getHomeTopPosts();
});

app.get("/BollywoodArticles", (req, res) => {
  const getBollywoodArticles = async () => {
    const articles = await BollywoodArticles.find();
    res.send(articles);
  };

  getBollywoodArticles();
});

app.get("/BollywoodAds", (req, res) => {
  const getBollywoodAds = async () => {
    const articles = await BollywoodAds.find();
    res.send(articles);
  };

  getBollywoodAds();
});

app.get("/BollywoodTopPosts", (req, res) => {
  const getBollywoodTopPosts = async () => {
    const articles = await BollywoodTopPosts.find();
    res.send(articles);
  };

  getBollywoodTopPosts();
});

app.get("/HollywoodArticles", (req, res) => {
  const getHollywoodArticles = async () => {
    const articles = await HollywoodArticles.find();
    res.send(articles);
  };

  getHollywoodArticles();
});

app.get("/HollywoodAds", (req, res) => {
  const getHollywoodAds = async () => {
    const articles = await HollywoodAds.find();
    res.send(articles);
  };

  getHollywoodAds();
});

app.get("/HollywoodTopPosts", (req, res) => {
  const getHollywoodTopPosts = async () => {
    const articles = await HollywoodTopPosts.find();
    res.send(articles);
  };

  getHollywoodTopPosts();
});

app.get("/TechnologyArticles", (req, res) => {
  const getTechnologyArticles = async () => {
    const articles = await TechnologyArticles.find();
    res.send(articles);
  };

  getTechnologyArticles();
});

app.get("/TechnologyAds", (req, res) => {
  const getTechnologyAds = async () => {
    const articles = await TechnologyAds.find();
    res.send(articles);
  };

  getTechnologyAds();
});

app.get("/TechnologyTopPosts", (req, res) => {
  const getTechnologyTopPosts = async () => {
    const articles = await TechnologyTopPosts.find();
    res.send(articles);
  };

  getTechnologyTopPosts();
});

app.get("/FitnessArticles", (req, res) => {
  const getFitnessArticles = async () => {
    const articles = await FitnessArticles.find();
    res.send(articles);
  };

  getFitnessArticles();
});

app.get("/FitnessAds", (req, res) => {
  const getFitnessAds = async () => {
    const articles = await FitnessAds.find();
    res.send(articles);
  };

  getFitnessAds();
});

app.get("/FitnessTopPosts", (req, res) => {
  const getFitnessTopPosts = async () => {
    const articles = await FitnessTopPosts.find();
    res.send(articles);
  };

  getFitnessTopPosts();
});

app.get("/FoodArticles", (req, res) => {
  const getFoodArticles = async () => {
    const articles = await FoodArticles.find();
    res.send(articles);
  };

  getFoodArticles();
});

app.get("/FoodAds", (req, res) => {
  const getFoodAds = async () => {
    const articles = await FoodAds.find();
    res.send(articles);
  };

  getFoodAds();
});

app.get("/FoodTopPosts", (req, res) => {
  const getFoodTopPosts = async () => {
    const articles = await FoodTopPosts.find();
    res.send(articles);
  };

  getFoodTopPosts();
});

app.get("/RelatedPosts", (req, res) => {
  const getRelatedPosts = async () => {
    const articles = await RelatedPosts.find();
    res.send(articles);
  };

  getRelatedPosts();
});

// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "..", "build", "index.html"));
// });

// start express server on port 3000
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
