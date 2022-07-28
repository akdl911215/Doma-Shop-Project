const express = require("express");
const router = express.Router();
const userService = require("./userService");
const jwt = require("../security/jwt");

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

router.post("/signin", async (req, res, next) => {
  console.log("userSignin start!!");
  const userDTO = req.body;
  const { username, token } = await userService.signin(userDTO);
  console.log(`username : ${username}, token : ${token}`);

  res.set({
    "content-type": "application/json; charset=utf-8",
  });
  if (username !== undefined && token !== undefined) {
    res.json({
      message: "로그인 성공",
      result: "토큰 발급 완료",
      id: username,
      token: token,
    });
  } else {
    res.json({
      message: "로그인 실패",
      id: username,
      token: token,
    });
  }
});

router.post("/auth", jwt.verify);
// router.get("/logout", userRouter.userLogout);

module.exports = router;
