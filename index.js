const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(cors);
app.use(express.static("public"));

const extendTimeoutMiddleware = (req, res, next) => {
  const space = " ";
  let isFinished = false;
  let isDataSent = false;

  // Only extend the timeout for API requests
  if (!req.url.includes("/api")) {
    next();
    return;
  }

  res.once("finish", () => {
    isFinished = true;
  });

  res.once("end", () => {
    isFinished = true;
  });

  res.once("close", () => {
    isFinished = true;
  });

  res.on("data", (data) => {
    // Look for something other than our blank space to indicate that real
    // data is now being sent back to the client.
    if (data !== space) {
      isDataSent = true;
    }
  });

  const waitAndSend = () => {
    setTimeout(() => {
      // If the response hasn't finished and hasn't sent any data back....
      if (!isFinished && !isDataSent) {
        // Need to write the status code/headers if they haven't been sent yet.
        if (!res.headersSent) {
          res.writeHead(202);
        }

        res.write(space);

        // Wait another 15 seconds
        waitAndSend();
      }
    }, 15000);
  };

  waitAndSend();
  next();
};

app.use(extendTimeoutMiddleware);

app.get("/", (req, res) => {
  res.send("This is from express.js");
});

// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "..", "build", "index.html"));
// });

// start express server on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
