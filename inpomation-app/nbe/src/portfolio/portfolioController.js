const express = require("express");
const router = express.Router();
const service = require("./portfolioService");

router.post("/assetInquiry", async (req, res, next) => {
  const username = req?.body?.username;
  console.log("username : ", username);
  const result = await service.assetInquiry(username);
  console.log("assetInquiry result : ", result);
});

router.post("/asset", async (req, res, next) => {
  const asset = req?.body;
  console.log("asset : ", asset);
  const { message, code } = await service.asset(asset);
  res.json({
    message: message,
    code: code,
  });
});

router.post("/cashAsset", async (req, res, next) => {
  const cashASset = req?.body;
  const result = await service.cashAsset(cashASset);
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
  const result = await service.portfolioInquiry(username);
  const cashRatio = Math.round(
    (result[0]?.cash / (result[0]?.cash + result[0]?.total_asset)) * 100
  );
  const assetRatio = Math.round(
    (result[0]?.total_asset / (result[0]?.cash + result[0]?.total_asset)) * 100
  );
  res.json({
    cash: result[0]?.cash,
    asset: result[0]?.total_asset,
    cashRatio: cashRatio,
    assetRatio: assetRatio,
  });
});

module.exports = router;
