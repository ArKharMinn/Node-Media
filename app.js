require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const layout = require("express-ejs-layouts");
const route = require("./routes/web");
const cookie = require("cookie-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(layout);
app.set("layout", "layout");
app.use(cookie());

mongoose
  .connect("mongodb://localhost:27017/media", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongo db connected"));

app.use("/", route);
app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
