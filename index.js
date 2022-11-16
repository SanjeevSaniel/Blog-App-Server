const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("This is from express.js");
});

app.get("/api/Bollywood.json", (req, res) => {
  res.status(200);
});

// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "..", "build", "index.html"));
// });

// start express server on port 3000
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
