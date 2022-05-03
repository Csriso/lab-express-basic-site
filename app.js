const express = require("express");
const { copyFileSync } = require("fs");
const app = express();
const port = 3000;

// configuraciones del servidor
app.use(express.static("public")); // esto indica a express donde estan ubicados los elementos estaticos como imagenes, css, etc

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
