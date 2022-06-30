const mysql = require("mysql2");
const dbConfig = require("../../config/database");
const pool = mysql.createPool(dbConfig);

exports.getConnectionPool = (callback) => {
  pool.getConnection((err, conn) => {
    if(!err) callback(conn)
  })
}