const express = require("express");
const router = express.Router();
const service = require("./portfolioService");

router.post("/cashAsset", async (req, res, next) => {
  const cashASset = req?.body;
  console.log("cashASset : ", cashASset);
  const result = await service.cashAsset(cashASset);
  console.log("cash vs asset result : ", result);
  const cashRatio = Math.round(
    (result?.cash / (result?.cash + result?.total_asset)) * 100
  );
  const assetRatio = Math.round(
    (result?.total_asset / (result?.cash + result?.total_asset)) * 100
  );
  res.json({
    cash: result?.cash,
    asset: result?.asset,
    cashRatio: cashRatio,
    assetRatio: assetRatio,
  });
});

router.post("/inquiry", async (req, res, next) => {
  const username = req?.body?.username;
  console.log("username : ", username);
  const result = await service.portfolioInquiry(username);
  console.log("inquiry result : ", result[0]);
  const cashRatio = Math.round(
    (result[0]?.cash / (result[0]?.cash + result[0]?.total_asset)) * 100
  );
  const assetRatio = Math.round(
    (result[0]?.total_asset / (result[0]?.cash + result[0]?.total_asset)) * 100
  );
  console.log(`cashRatio : ${cashRatio}, assetRatio : ${assetRatio}`);
  res.json({
    cash: result[0].cash,
    asset: result[0].total_asset,
    cashRatio: cashRatio,
    assetRatio: assetRatio,
  });
});

module.exports = router;
