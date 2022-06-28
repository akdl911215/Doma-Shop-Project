const express = require('express');
const router = express.Router();
// 보안
const crypto = require("crypto");
// DB
const promisePool = require("../../middlewares/pool");
const bodyParser = require("body-parser");
const { resourceLimits } = require('worker_threads');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

console.log("signup 시작")
router.post("/signup", async (req, res, next) => {
    console.log("???")
    console.log("req.body", req.body) 
    console.log("pool", promisePool) 
    // if (!req.body) throw new Error(`1 ${req.body}`)

    router.post("signup", (req, res) => {
        const sql = "INSERT INTO users(username, password, name, email, phone_number, address, roles) VALUES(?, ?, ?, ?, ?, ?)";
        try {
            console.log("진입1");
            promisePool.getConnection((err, connection) => { // Connection 연결
                console.log("connection_pool POST");
                if (err) throw err;
                connection.query(sql, (err, result, fields) => {
                    if (err) {
                        console.error(`connection_pool POST Error / ${err}`);
                        res.status(500).send("message : Internal Server Error");
                    }
                    else {
                        if (result.length === 0) {
                            res.status(400).send({
                                success : false,
                                message : "DB response Not Found"
                            });
                        }
                        else {
                            res.status(200).send({
                                success : true,
                                result
                            });
                        }
                    }
                });
                connection.release();
            });
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
    promisePool.getConnection((err, connection) => {
        if (err) {
            throw err
        }

        connection.query(sql, (err, result, fields) => {
            if (err) {
                throw err
            }

            console.log("회원 리스트2")
        })
    })
});

module.exports = router;