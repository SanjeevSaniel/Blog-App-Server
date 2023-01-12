const express = require("express");
const app = express();

const {
  TechnologyArticles,
  TechnologyAds,
  TechnologyTopPosts,
} = require("../models/TechnologyModels");

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

module.exports = app;
