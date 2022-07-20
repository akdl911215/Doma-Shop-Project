const { fail } = require("assert");
const jwt = require("./jwt");

exports.authUtil = {
  checkToken: async (req, res, next) => {
    const token = req.headers["x-access-token"] || req.headers.token;
    console.log("authUtil token : ", token);

    if (!token) {
      return res.status(403).json({
        success: fail,
        message: "토큰이 없습니다.",
      });
    }

    console.log("req.headers.authorization : ", req.headers.authorization);
    const user = await jwt.verify(req.headers.authorization, token);
    req.username = user.username;
    console.log("req.username : ", req.username);
    return next();
  },
};
