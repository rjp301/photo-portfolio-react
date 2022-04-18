require("dotenv").config();
const { resolveInclude } = require("ejs");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.listen(PORT, () => console.log(`Listening on localhost:${PORT}...`));
