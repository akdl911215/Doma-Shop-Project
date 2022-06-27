require("dotenv").config();
const mysql = require("mysql2");

// const db = mysql.createConnection({
//       host: process.env.DB_HOST,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_DATABASES,
//       port: process.env.DB_PORT,
// })
const db = {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASES,
      port: process.env.DB_PORT,
}

// db.connect(); 
module.exports = db;
