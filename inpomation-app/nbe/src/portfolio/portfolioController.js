const express = require("express");
const router = express.Router();
const service = require("./portfolioService");

router.post("/cashAsset", async (req, res, next) => {
  const cashASset = req?.body;
  console.log("cashASset : ", cashASset);
  const result = await service.cashAsset(cashASset);
  res.json({
    result,
  });
});

module.exports = router;
