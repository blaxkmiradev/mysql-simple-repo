const express = require("express");
const db = require("./config/db");

const app = express();
app.use(express.json());

// Get all users
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.send(err);
    res.json(results);
  });
});

// Add user
app.post("/users", (req, res) => {
  const { name, email, password } = req.body;

  db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, password],
    (err, result) => {
      if (err) return res.send(err);
      res.json({ message: "User added", id: result.insertId });
    }
  );
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
