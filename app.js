const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const pool = require("./controller/conn");

app.get("/", (req, res) => {
  res.send("API Ready!");
});

app.get("/list-name", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM belajar.product_table");
    res.json(result.rows);
  } catch (err) {
    console.log("Database query error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

console.log("PORT dari ENV:", process.env.PORT);
app.listen(PORT, () => {
  console.log(`Server running on: ${PORT}`);
});
