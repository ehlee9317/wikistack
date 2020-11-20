const indexViews = require("./views/index.js");
// const indexModels = require("./models/index.js");

const express = require("express");
const app = express();
const wikiRouter = require("./routes/wiki.js");
const userRouter = require("./routes/users.js");

const { db, Page, User } = require("./models");
const router = require("./routes/wiki.js");

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.use("/wiki", wikiRouter);

app.get("/", (req, res) => {
  res.send(indexViews.main());
});



const PORT = 3000;

const sync = async () => {
  //   await Page.sync();
  //   await User.sync();
  await db.sync({ force: true });

  app.listen(PORT, () => {
    console.log(`Server is listening in port ${PORT}`);
  });
};

sync();
