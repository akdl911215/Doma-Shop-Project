require("dotenv").config();
// const mysql = require("mysql2");

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
      connectionLimit: 50,
      // aquireTimeout: 30000, // 30cecs
      // minConnections: 1,
}

// db.connect(); 
module.exports = db;
