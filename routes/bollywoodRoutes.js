const express = require("express");
const app = express();

const {
  BollywoodArticles,
  BollywoodAds,
  BollywoodTopPosts,
} = require("../models/BollywoodModels");

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
