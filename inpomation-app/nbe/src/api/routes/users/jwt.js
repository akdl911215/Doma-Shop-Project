const jwt = require("jsonwebtoken");
const { Base64 } = require("js-base64");
console.log("JWT_SECRET : ", process.env.JWT_SECRET);

module.exports = {
  sign: async (user) => {
    console.log("simg  user : ", user);
    const header = {
      alg: "HS256",
      typ: "JWT",
    };
    const payload = {
      expiresIn: "30m", // 토큰 유효 기간
      issuer: "issuer", // 발행자
      username: user,
    };

    return {
      token: jwt.sign(
        header,
        payload,
        HMACSHA256(
          Base64.encode(header) + "." + Base64.encode(payload),
          process.env.JWT_SECRET
        )
      ),
    };
  },
  verify: async (req, res, next) => {
    try {
      console.log("verify req : ", req);
      console.log("verify req.body.username: ", req.body.username);
      req.decoded = await jwt.verify(req.body.username, process.env.JWT_SECRET);
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
