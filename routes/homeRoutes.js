const express = require("express");
const app = express();

const {
  Article,
  HomeLatest,
  HomeAds,
  HomeSlider,
  HomeTopPosts,
} = require("../models/HomeModels");

app.get("/Articles", (req, res) => {
  const getArticles = async () => {
    const articles = await Article.find();
    res.send(articles);
  };

  getArticles();
});

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

module.exports = app;
