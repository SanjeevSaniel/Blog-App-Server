// const express = require("express");
// const app = express();
const app = require("express")();

const {
  BollywoodArticles,
  BollywoodAds,
  BollywoodTopPosts,
} = require("../models/BollywoodModels");

//TODO: New Article API
app.post("/BollywoodArticles/", async (req, res) => {
  const article = new BollywoodArticles(req.body);
  // console.log(req.body);

  // if (req.body.category === "Bollywood") {
  try {
    await article.save();
    res.send(article);
  } catch (error) {
    res.status(500).send(error);
  }
  // }
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

module.exports = app;
