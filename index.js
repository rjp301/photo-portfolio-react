require("dotenv").config();
const { resolveInclude } = require("ejs");
const express = require("express");
const res = require("express/lib/response");
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/contact", (req, res) => {
  res.render("pages/contact");
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.listen(PORT, () => console.log(`Listening on localhost:${PORT}...`));
