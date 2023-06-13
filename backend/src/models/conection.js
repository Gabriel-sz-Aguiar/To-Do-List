const mysql = require("mysql2/promise");

require("dotenv").config();

const conection = mysql.createPool({
  host: process.env.MySQL_Host,
  user: process.env.MySQL_User,
  password: process.env.MySQL_Password,
  database: process.env.MySQL_DB,
});

module.exports = conection;
