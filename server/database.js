const { createPool } = require("mysql");

const pool = createPool({
  port: process.env.PORT,
  host: process.env.DB_host,
  user: process.env.user,
  password: process.env.DB_password,
  database: process.env.DB,
  connectionLimit: 10,
});

module.exports = pool;
