const mysql = require("mysql2");
const dbsecret = require("../../config/database");


const pool = mysql.createPool(dbsecret);
const promisePool = pool.promise();
module.exports = promisePool;