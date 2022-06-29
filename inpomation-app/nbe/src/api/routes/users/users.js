const express = require('express');
const router = express.Router();
// 보안
const crypto = require("crypto");
// DB
// const promisePool = require("../../middlewares/pool");
// const pool = require("../../middlewares/pool");
const bodyParser = require("body-parser");
const { resourceLimits } = require('worker_threads');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'mall_sync',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
const promisePool = pool.promise();

console.log("signup 시작")
router.post("/signup", async (req, res, next) => {
    console.log("???")
    console.log("req.body", req.body) 
    console.log("promisePool", promisePool) 
    // console.log("pool", pool) 
    // if (!req.body) throw new Error(`1 ${req.body}`)

    router.post("signup", (req, res) => {
        const sql = "INSERT INTO users(username, password, name, email, phone_number, address, roles) VALUES(?, ?, ?, ?, ?, ?)";
        try {
            console.log("진입1");
            // pool.query(sql, function(err, row, fields) {
            //     console.log("row : ", row)
            // })
            promisePool.query("SELECT 1")
                .then(([rows, fields]) => {
                    console.log("[rows, fields] : ", rows)
                })
                .catch("catch : ", console.log("dd"))
                .then(() => {
                    console.log("end")
                    pool.end();
                })
        } catch (err) {
            console.error(`connection_pool POST Error / ${err}`);
            res.status(500).send("message : Internal Server Error");
        }
    })
});
// https://velog.io/@lightpurple/Node.js-%EB%9E%9C%EB%8D%A4%EC%B1%84%ED%8C%85-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B82-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EA%B5%AC%ED%98%84
// https://zinirun.github.io/2020/12/02/node-crypto-password/
router.get("/signin", (req, res) => res.send('로그인'));
router.get("/list", (req, res) => {
    console.log("회원 리스트");
    res.send("리스트")
    const sql = "SELECT * FROM users";
    try {
        console.log("진입1");
        pool.query(sql, function(err, row, fields) {
            console.log("row : ", row)
            console.log("fields : ", fields)
        })
    } catch (err) {
        console.error(`connection_pool POST Error / ${err}`);
        res.status(500).send("message : Internal Server Error");
    }
});

module.exports = router;