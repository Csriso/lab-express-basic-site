const express = require("express");
const { copyFileSync } = require("fs");
const app = express();
const port = 3000;

// configuraciones del servidor
app.use(express.static("public")); // esto indica a express donde estan ubicados los elementos estaticos como imagenes, css, etc

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});

app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + "/views/gallery.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
