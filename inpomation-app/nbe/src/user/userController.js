const express = require("express");
const router = express.Router();
const userService = require("./userService");

router.post("/list", async (req, res, next) => {
  // https://potato-hyun.tistory.com/31
  // 노드 페이징 처리 작업하기
});

router.post("/modify", async (req, res, next) => {
  const { message } = await userService.modify(req?.body);
  res.json({
    message,
  });
});

router.post("/inquiry", async (req, res, next) => {
  const user = await userService.inquiry(req?.body?.username);
  if (user) {
    res.json(user);
  } else {
    res.json({
      message: "회원정보를 확인해보세요.",
    });
  }
});

router.post("/signup", async (req, res, next) => {
  const { username, password } = await userService.signup(req?.body);

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
  const { username, token, roles } = await userService.signin(req?.body);

  res.set({
    "content-type": "application/json; charset=utf-8",
  });
  if (username !== undefined && token !== undefined) {
    res.json({
      message: "로그인 성공",
      result: "토큰 발급 완료",
      id: username,
      token: token,
      roles: roles,
    });
  } else {
    res.json({
      message: "로그인 실패",
      id: username,
      token: token,
      roles: roles,
    });
  }
});

router.post("/auth", async (req, res, next) => {
  const { code, message, roles } = await userService.jwtToken({
    token: req?.header("Authorization").split(" ")[1],
    roles: req?.body?.roles,
  });
  return res.json({ code, message, roles });
});

module.exports = router;
