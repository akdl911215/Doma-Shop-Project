const jwt = require("jsonwebtoken");
const { encode, decode } = require("js-base64");
const cookieParser = require("cookie-parser");
var iconv = require("iconv-lite");
require("dotenv").config();
console.log("JWT_SECRET : ", process.env.JWT_SECRET);

module.exports = {
  sign: async (user) => {
    const payload = {
      username: user,
      // alg: "HS256",
      typ: "JWT",
    };

    const encodeSecret = encodeURI(process.env.JWT_SECRE);
    console.log("encodeSecret :: ", encodeSecret);
    const option = {
      scretKey: process.env.JWT_SECRE,
      options: {
        exp: "1m", // 토큰 유효 기간
        iss: "investing", // 발행자
        sub: "invest token", // 토큰 제목
        algorithm: "HS256",
        expiresIn: "1m", // 만료시간
        issuer: "issuer",
      },
    };
    return {
      token: jwt.sign(payload, hmacSha256(encodeSecret), option),
    };
  },
  verify: async (req, res, next) => {
    try {
      const token = req?.body?.token;
      console.log("token :: ", token);

      const KEY = iconv.decode(
        Buffer.from(process.env.SESSION_SECRET_KEY),
        "EUC-KR"
      );
      console.log("KEY : ", KEY);

      const check = jwt.verify(token, KEY, (error, decoded) => {
        if (error) {
          console.error(`verify error : ${error}`);
        }
        console.log(`decoded.typ : ${decoded?.typ}`);
        // res.send(decoded);
      });

      if (check) {
        console.log("check ::::: ", check);
      }

      return next();
    } catch (err) {
      if (err.name === "TokenExpiredError") {
        // 유효기간 초과
        return res.status(419).json({
          code: 419,
          message: "토큰이 만료되었습니다",
        });
      }

      return res.status(401).json({
        code: 401,
        message: "유효하지 않은 토큰입니다.",
      });
    }
  },
};
