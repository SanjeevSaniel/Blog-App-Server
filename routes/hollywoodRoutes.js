const express = require("express");
const app = express();

const {
  HollywoodArticles,
  HollywoodAds,
  HollywoodTopPosts,
} = require("../models/HollywoodModels");

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

module.exports = app;
