const express = require("express");
const app = express();

const { FoodArticles, FoodAds, FoodTopPosts } = require("../models/FoodModels");

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

module.exports = app;
