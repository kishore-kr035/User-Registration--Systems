const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

const app = express();

// ✅ 1. Middleware (FIRST)
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/test", (req, res) => {
  res.send("Test route working");
});

// ✅ 2. ROUTE (INSERT HERE)
app.post("/addUser", (req, res) => {
  console.log("Route HIT"); // 👈 for testing

  const { name, email, phone, age } = req.body;

  const sql = "INSERT INTO users (name, email, phone, age) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, email, phone, age], (err, result) => {
    if (err) {
      console.log("DB Error:", err);
      res.send("Error");
    } else {
      res.send("Data inserted successfully");
    }
  });
});

// ✅ 3. START SERVER (LAST)
app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});