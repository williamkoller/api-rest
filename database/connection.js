const mysql = require("mysql");

const conn = mysql.createConnection({
  database: "apiRest",
  host: "localhost",
  user: "root",
  password: "root",
  port: 5555
});

module.exports = conn;
