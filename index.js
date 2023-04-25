const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();

// const corsOptions = {
//   // origin: "http://localhost:3000",
//   // accessControlAllowOrigin: "https://react-blog-app-8.netlify.app/",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };

const Router = require("./routes/defaultRoutes");
const HomeRouter = require("./routes/homeRoutes");
const BollywoodRouter = require("./routes/bollywoodRoutes");
const HollywoodRouter = require("./routes/hollywoodRoutes");
const TechnologyRouter = require("./routes/technologyRoutes");
const FitnessRouter = require("./routes/fitnessRoutes");
const FoodRouter = require("./routes/foodRoutes");

const database = require("./configurations/databaseConfig");

app.use(cors());
// app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use(express.json());

// database.connectToCompass();
database.connectToAtlas();

app.use(Router);
app.use(HomeRouter);
app.use(BollywoodRouter);
app.use(HollywoodRouter);
app.use(TechnologyRouter);
app.use(FitnessRouter);
app.use(FoodRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
