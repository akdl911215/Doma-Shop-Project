// const mysql = require("mysql2");
const mariadb = require("mariadb");
const dbConfig = require("../../config/database");
console.log("dbConfig :", dbConfig);
const pool = mariadb.createPool(dbConfig);
// console.log("pool : ", pool);

exports.getConnectionPool = (callback) => {
  console.log("callback : ", callback);
  pool.getConnection((err, conn) => {
    if (!err) callback(conn);
  });
};
