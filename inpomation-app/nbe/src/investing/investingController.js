const express = require("express");
const router = express.Router();
const service = require("./investingService");

router.post("/register", async (req, res, next) => {
  const result = await service.register(req?.body);
  console.log("result : ", result);

  res.json(result);
});

router.post("/list", async (req, res, next) => {
  const result = await service.list(req?.body);
  console.log("result : ", result);

  res.json(result);
});

module.exports = router;
