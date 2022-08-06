const express = require("express");
const router = express.Router();
const service = require("./portfolioService");

router.post("/cashAsset", async (req, res, next) => {
  const cashASset = req?.body;
  console.log("cashASset : ", cashASset);
  const result = await service.cashAsset(cashASset);
  console.log("cash vs asset result : ", result);
  res.json({
    cash: result?.cash,
    asset: result?.asset,
  });
});

router.post("/inquiry", async (req, res, next) => {
  const username = req?.body?.username;
  console.log("username : ", username);
  const user = await service.portfolioInquiry(username);
  console.log("inquiry user : ", user);
});

module.exports = router;
