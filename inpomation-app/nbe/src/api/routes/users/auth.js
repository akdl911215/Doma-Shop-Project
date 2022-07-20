const jwt = require("./jwt");

exports.authUtil = {
  checkToken: async (req, res, next) => {
    const token = req.headers.token;
    console.log("authUtil token : ", token);

    if (!token) {
      return res.json({
        message: "토큰이 없습니다.",
      });
    }

    const user = await jwt.verify(token);
    req.username = user.username;
    next();
  },
};
