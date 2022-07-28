// const router = express();
const express = require("express");
const router = express.Router();
const userService = require("./userService");
router.post("/signup", async (req, res, next) => {
  const userDTO = req.body;
  const { username, password } = await userService.signup(userDTO);
  console.log(`username: ${username}, password: ${password}`);

  if (username !== undefined && password !== undefined) {
    res.json({
      message: "회원가입 성공",
    });
  } else {
    res.json({
      message: "회원가입 실패",
    });
  }
});

// router.post("/signin", userRouter.userSignin);
router.post("/signin", async (req, res, next) => {
  const userDTO = req.body;
  const { username, jwtToken } = await userService.signin(userDTO);
  if (username !== undefined && jwtToken !== undefined) {
    res.json({
      message: "로그인 성공",
      result: "토큰 발급 완료",
      id: username,
      token: jwtToken,
    });
  } else {
    res.json({
      message: "로그인 실패",
      id: username,
      token: jwtToken,
    });
  }
});

// router.post("/payload", verify);
// router.get("/logout", userRouter.userLogout);

module.exports = router;
