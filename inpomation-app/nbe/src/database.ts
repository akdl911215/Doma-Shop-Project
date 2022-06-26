import Knex from "knex";
const mysql = require("mysql2");

const db = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Wjdgus@580-",
      database: "mall_sync",
      port: 3306,
})

db.connect(); 
module.exports = db;