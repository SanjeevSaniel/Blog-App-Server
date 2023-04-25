const mongoose = require("mongoose");

const database = "blogData";

function connectToAtlas() {
  const credentials = {
    username: "sanjeev",
    password: "sanjeev77",
  };
  mongoose
    .connect(
      `mongodb+srv://${credentials.username}:${credentials.password}@cluster0.tl5agnc.mongodb.net/${database}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Connected to MongoDB..."))
    .catch((error) => console.error("Couldn't connect to MongoDB...", error));
}

function connectToCompass() {
  mongoose
    .connect(
      `mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0/${database}`,
      { useNewUrlParser: true }
    )
    .then(() => {
      console.log("Connected to MongoDB Compass.");
    })
    .catch((err) => {
      console.error("MongoDB connection error: %s \n", err);
    });
}

exports.connectToAtlas = connectToAtlas;
exports.connectToCompass = connectToCompass;
