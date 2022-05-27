const mysql = require("mysql2");

require('dotenv').config()

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL username
    user: "root",
    // Your MySQL password
    password: "rootroot",
    database: process.env.DB_NAME
  },
  console.log("Connected to the company database.")
);

module.exports = db;