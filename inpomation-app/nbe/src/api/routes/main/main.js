const express = require("express");
const app = express();
const router = express.Router();
const jwt = require("jsonwebtoken");
const jwtToken = require("../users/jwt");
const cookieParser = require("cookie-parser");
require("dotenv").config();

router.get("/", (req, res, next) => {
  res.send("home 임");
  console.log("메인페이지 작동");
  //   console.log(req.session);

  // res.cookie("key", "value", {
  //   maxAge: 10000,
  // });
  // console.log("res ::::: ", res);

  // const cookie = req.headers.cookie;
  // console.log("coolie : ", cookie);
  // const token = cookie.substring(4);
  // console.log("token : ", token);
  // jwt.verify(token, process.env.SESSION_SECRET_KEY, (error, decoded) => {
  //   if (error) {
  //     console.error(`verify error : ${error}`);
  //   }
  //   console.log(`decoded : ${decoded}`);
  //   res.send(decoded);
  // });
});

module.exports = router;
