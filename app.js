const express = require("express");
const cors = require("cors");
const { TaskRouter } = require("./src/tasks/tasks.route");
const { ProfileRouter } = require("./src/profile/profile.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", TaskRouter);
app.use("/", ProfileRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Not found!!!",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "Api not found",
      },
    ],
  });
  next();
});

module.exports = app;
