const express = require("express");
const app = express();

const {
  FitnessArticles,
  FitnessAds,
  FitnessTopPosts,
} = require("../models/FitnessModels");

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

module.exports = app;
