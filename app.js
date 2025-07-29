const express = require("express");
const app = express();
const port = 3000;
const data = require("./data.json");

app.get("/", (req, res) => {
  res.send("API Ready!");
});

app.get("/list-name", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running on: ${port}`);
});
