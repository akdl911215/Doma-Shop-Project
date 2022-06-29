const mysql = require("mysql2");
const dbsecret = require("../../config/database");


const pool = mysql.createPool(dbsecret);
// console.log("pool : ", pool)
// const promisePool = pool.promise();
// console.log("promisePool : ", promisePool);
module.exports = pool;
// module.exports = promisePool;