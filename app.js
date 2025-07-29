const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const data = require("./data.json");

app.get("/", (req, res) => {
  res.send("API Ready!");
});

app.get("/list-name", (req, res) => {
  res.json(data);
});

console.log("PORT dari ENV:", process.env.PORT);

app.listen(PORT, () => {
  console.log(`Server running on: ${PORT}`);
});
