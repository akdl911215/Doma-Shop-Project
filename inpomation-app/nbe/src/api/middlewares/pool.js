const mysql = require("mysql2/promise");
const dbsecret = require("../../config/database");


const pool = mysql.createPool(dbsecret);
module.exports = pool;