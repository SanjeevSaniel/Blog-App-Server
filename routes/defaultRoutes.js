const express = require("express");
const app = express();

const { User } = require("../models/UserModel");

const { RelatedPosts } = require("../models/RelatedPostsModel");

app.post("/user", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/RelatedPosts", (req, res) => {
  const getRelatedPosts = async () => {
    const articles = await RelatedPosts.find();
    res.send(articles);
  };

  getRelatedPosts();
});

app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname + "/index.html"));
  res.send("Express");
});

module.exports = app;
