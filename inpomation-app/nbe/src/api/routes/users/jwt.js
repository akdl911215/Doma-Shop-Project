const jwt = require("jsonwebtoken");
console.log("JWT_SECRET : ", process.env.JWT_SECRET);

module.exports = {
  sign: async (user) => {
    console.log("simg  user : ", user);
    const payload = {
      username: user,
      // email: user.email,
    };
    const encodedPayload = new Buffer(JSON.stringify(payload))
      .toString("base64")
      .replace("=", "");
    const options = {
      algorithm: "HS256", // 해싱 알고리즘
      expiresIn: "30m", // 토큰 유효 기간
      issuer: "issuer", // 발행자
    };
    return {
      token: jwt.sign(encodedPayload, process.env.JWT_SECRET, options),
    };
  },
  verify: async (token) => {
    try {
      console.log("verify : ", verify);
      return jwt.verify(token, process.env.JWT_SECRET);
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
