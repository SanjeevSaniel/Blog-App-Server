const path = require("path");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const Router = require("./routes/defaultRoutes");
const HomeRouter = require("./routes/homeRoutes");
const BollywoodRouter = require("./routes/bollywoodRoutes");
const HollywoodRouter = require("./routes/hollywoodRoutes");
const TechnologyRouter = require("./routes/technologyRoutes");
const FitnessRouter = require("./routes/fitnessRoutes");
const FoodRouter = require("./routes/foodRoutes");

const database = "blogData";

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

app.use(cors());
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use(Router);
app.use(HomeRouter);
app.use(BollywoodRouter);
app.use(HollywoodRouter);
app.use(TechnologyRouter);
app.use(FitnessRouter);
app.use(FoodRouter);

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname + "/index.html"));
// });

// app.get("/RelatedPosts", (req, res) => {
//   const getRelatedPosts = async () => {
//     const articles = await RelatedPosts.find();
//     res.send(articles);
//   };

//   getRelatedPosts();
// });

// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "..", "build", "index.html"));
// });

// start express server on port 3000
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
