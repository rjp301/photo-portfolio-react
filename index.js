require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.static("public"));
app.set("view engine", "ejs");

const pages = require('./src/helpers/readPhotos')()
console.log(pages)

app.get("/", (req, res) => {
  res.render("pages/index",{pages});
});

app.get("/contact", (req, res) => {
  res.render("pages/contact");
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.listen(PORT, () => console.log(`Listening on localhost:${PORT}...`));
