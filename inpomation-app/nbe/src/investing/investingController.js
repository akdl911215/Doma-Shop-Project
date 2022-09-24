const express = require("express");
const router = express.Router();
const service = require("./investingService");

// regdate modifydate deletedate 추가하기
router.post("/register", async (req, res, next) =>
  res.json(await service.register(req?.body))
);

router.post("/list", async (req, res, next) => {
  const result = await service.list();
  console.log("result : ", result);

  res.json(result);
});

module.exports = router;
