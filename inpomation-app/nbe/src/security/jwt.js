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
    console.log("verift start !!");
    const token = req?.header("Authorization").split(" ")[1];
    if (!token) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }
    try {
      req.user = jwt.verify(
        token,
        iconv.decode(Buffer.from(process.env.JWT_SECRET), "EUC-KR")
      );
      return res.json({
        user: req.user,
      });
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
