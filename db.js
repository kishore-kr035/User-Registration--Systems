const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "kishore",
  password: "1234", // change this
  database: "user_db"
});

db.connect((err) => {
  if (err) {
    console.log("DB Error:", err);
  } else {
    console.log("MySQL Connected...");
  }
});

module.exports = db;