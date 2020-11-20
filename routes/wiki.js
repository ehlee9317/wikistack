const express = require("express");
const router = express.Router();

const { addPage } = require("../views")

router.get("/add", (req, res) => {
  res.send(addPage());
})

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
