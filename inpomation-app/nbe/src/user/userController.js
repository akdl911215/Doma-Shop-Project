const express = require("express");
const router = express.Router();
const userService = require("./userService");

router.post("/list", async (req, res, next) => {
  // https://potato-hyun.tistory.com/31
  // 노드 페이징 처리 작업하기

  // https://tape22.tistory.com/13
  // https://velog.io/@minsangk/%EC%BB%A4%EC%84%9C-%EA%B8%B0%EB%B0%98-%ED%8E%98%EC%9D%B4%EC%A7%80%EB%84%A4%EC%9D%B4%EC%85%98-Cursor-based-Pagination-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
  const pageInfo = req?.body;
  const page = parseInt(pageInfo?.page);
  const pageSize = parseInt(pageInfo?.pageSize);
  try {
    if (!pageInfo || !pageSize) {
      alert("페이지 정보를 확인하세요.");
      return;
    }

    const result = await userService.list({
      page: page,
      pageSize: pageSize,
    });
    console.log("list result : ", result);
  } catch (err) {
    console.error("user list error : ", err);
    throw err;
  }
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
