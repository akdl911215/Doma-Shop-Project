// const express = require('express');
// const router = express.Router();
// // 보안
// const crypto = require("crypto");
// // DB
// const pool = require("../../middlewares/pool");
// const bodyParser = require("body-parser");
// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: false }));

// console.log("signup 시작")
// router.post("/signup", async (req, res, next) => {
//     console.log("???")
//     console.log("req.body", req.body) 
//     console.log("pool", pool) 
//     // if (!req.body) throw new Error(`1 ${req.body}`)

//     await pool.getConnection(async (err, connection) => {
//         if(err) throw new Error(`connection error : ${err}`);
//         else {
//             connection.query("sql 쿼리", (err, result) => {
//                 if (err) throw new Error(`sql error : ${err}`);
//                 else {
//                        try { // DB에 username 있는지 확인
//                             const same_username = pool.query(
//                                 "SELECT * FROM users WHERE username = ?",
//                                 req.body.username
//                             );
                    
//                             console.log("same_username[0][0] : ", same_username[0][0]);
//                             if (same_username[0][0] !== undefined) {
//                                 return res.status(400).json({
//                                     result: false,
//                                     message: "User is aleady exist!",
//                                 })
//                             }
//                         } catch (e) {
//                             global.console.error("signup error : ", e);
//                             throw new Error(`signup error : ${e}`);
//                         }
                        
//                         console.log("여긴???")
//                         crypto.hash(req.body.password, 10, async (err, hash) => {
//                             console.log("req.body.password 진입 : ", req.body.password);
//                             if (err) {
//                                 throw new Error(`crypto error : ${err}`);
//                             } else {
//                                 console.log("!!! : ", [rqe.body.username, req.body.password, req.body.name,
//                                     req.body.email, req.body.phoneNumber, req.body.address,
//                                     req.body.roles]);
//                                 try {
//                                     connection.beginTransaction();
//                                     await connection.query(
//                                         "INSERT INTO users(username, password, name, email, phone_number, address, roles) VALUES(?, ?, ?, ?, ?, ?)",
//                                         [rqe.body.username, req.body.password, req.body.name,
//                                             req.body.email, req.body.phone_number, req.body.address,
//                                             req.body.roles]
//                                     )
//                                 } catch (err) {
//                                     connection.rollback();
//                                     throw new Error(`crypto connection error : ${err}`);
//                                 } finally {
//                                     connection.release();
//                                 }
//                             }
//                         })
//                     }
//                 });
//         }

//     });

// });
// // https://velog.io/@lightpurple/Node.js-%EB%9E%9C%EB%8D%A4%EC%B1%84%ED%8C%85-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B82-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EA%B5%AC%ED%98%84
// // https://zinirun.github.io/2020/12/02/node-crypto-password/
// router.get("/signin", (req, res) => res.send('로그인'));
// router.get("/list", (req, res) => res.send('회원 리스트'));

// module.exports = router;