const express = require("express");
const router = express.Router();
const service = require("./economicService");

router.post("/kospi", async (req, res, next) =>
  res.json(await service.kospi(req?.body))
);

module.exports = router;
