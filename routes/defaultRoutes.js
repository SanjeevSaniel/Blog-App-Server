const express = require("express");
const app = express();

const { RelatedPosts } = require("../models/RelatedPostsModel");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/RelatedPosts", (req, res) => {
  const getRelatedPosts = async () => {
    const articles = await RelatedPosts.find();
    res.send(articles);
  };

  getRelatedPosts();
});

module.exports = app;
