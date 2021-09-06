const express = require("express");
const app = express();
require("dotenv").config();

const mysql = require("mysql2");

app.use(express.json());

/*
Database connection
*/
const connection = mysql.createConnection({
  port: "",
  host: process.env.DB_host,
  user: process.env.DB_user,
  password: process.env.DB_password,
  database: process.env.DB,
  connectionLimit: 10,
});

connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("database connected");
  }
});

connection.query(
  "INSERT INTO `email_table` (email) VALUES (labhi873@gmail.com) ",
  function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

app.use("/home", require("./route/emailRoute"));

app.listen(4000, () => {
  console.log("app is running on port number 4000");
});
