const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  res.send("Hello from /wiki");
});

router.post("/", async (req, res, next) => {
  res.send("Hello from /wiki");
});

router.get("/add", (req, res, next) => {
  res.send("Hello from /wiki/add");
});

module.exports = router;
