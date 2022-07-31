const jwt = require("jsonwebtoken");
const iconv = require("iconv-lite");
require("dotenv").config();

module.exports = {
  sign: async (user) => {
    return {
      token: jwt.sign(
        {
          // payload
          username: user,
          typ: "JWT",
        },
        process.env.JWT_SECRET,
        {
          // options
          subject: "invest token", // 토큰 제목
          algorithm: "HS256",
          expiresIn: "1m", // 토큰 유효 기간
          issuer: "issuer", // 발행자
        }
      ),
    };
  },
  verify: async (req, res, next) => {
    const token = req?.token;
    if (!token) {
      return {
        code: 401,
        message: "No token, authorization denied",
        roles: null,
      };
    }
    try {
      res = jwt.verify(
        token,
        iconv.decode(Buffer.from(process.env.JWT_SECRET), "EUC-KR")
      );
      return {
        message: "토큰이 정상입니다.",
        code: 200,
        roles: req?.roles,
      };
    } catch (err) {
      console.log("err : ", err);
      if (err.name === "TokenExpiredError") {
        // 유효기간 초과
        return {
          code: 419,
          message: "토큰이 만료되었습니다",
          roles: null,
        };
      }

      return {
        code: 401,
        message: "유효하지 않은 토큰입니다.",
        roles: null,
      };
    }
  },
};
