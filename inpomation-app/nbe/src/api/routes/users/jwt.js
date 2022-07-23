const jwt = require("jsonwebtoken");
const { encode, decode } = require("js-base64");
const cookieParser = require("cookie-parser");
require("dotenv").config();
console.log("JWT_SECRET : ", process.env.JWT_SECRET);

module.exports = {
  sign: async (user) => {
    // console.log("simg  user : ", user);

    return {
      token: jwt.sign(
        {
          alg: "HS256",
          typ: "JWT",
        },
        process.env.JWT_SECRET,
        {
          // exp: "1m", // 토큰 유효 기간
          // iss: "investing", // 발행자
          // sub: "invest token", // 토큰 제목
          expiresIn: "15m", // 만료시간 15분
          issuer: "5m",
        }
      ),
    };
  },
  verify: async (req, res, next) => {
    try {
      // 쿠키를 넣어주면 될듯
      // console.log("verify req : ", req);
      // console.log("verify req.headers: ", req.headers);
      // console.log("verify req.body: ", req.body);

      // req.headers.authorization.split(' ')[1];
      // const token = JSON.stringify(req?.body?.token)?.split(".")[1];
      const token = req?.body?.token;
      console.log("token :: ", token);
      console.log(
        "encode(process.env.SESSION_SECRET_KEY) :: ",
        encode(process.env.SESSION_SECRET_KEY)
      );
      console.log(
        "process.env.SESSION_SECRET_KEY :: ",
        process.env.SESSION_SECRET_KEY
      );

      jwt.verify(
        token,
        encode(process.env.SESSION_SECRET_KEY),
        (error, decoded) => {
          if (error) {
            console.error(`verify error : ${error}`);
          }
          console.log(`decoded : ${decoded}`);
          res.send(decoded);
        }
      );
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
