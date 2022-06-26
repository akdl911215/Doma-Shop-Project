// import { express } from "../../../app"; 
const express = require("express");
const router = express.Router();

router.get("/signin", (req, res) => res.send('로그인'));
router.get("/list", (req, res) => res.send('유저 리스트'));
router.get("/signup", (req, res) => res.send('회원가입'));

console.log("users router : ", router);
module.exports = router;
