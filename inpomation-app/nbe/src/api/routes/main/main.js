const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const jwtToken = require("../../../security/jwt");
const cookieParser = require("cookie-parser");
require("dotenv").config();

router.get("/", (req, res, next) => {
  res.send("home 임");
  console.log("메인페이지 작동");
});

module.exports = router;
