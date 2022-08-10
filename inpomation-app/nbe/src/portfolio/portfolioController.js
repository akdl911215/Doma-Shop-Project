const express = require("express");
const router = express.Router();
const service = require("./portfolioService");

router.post("/assetRemove", async (req, res, next) => {
  console.log("asset remove start : ", req?.body?.stockId);
  const result = await service.assetRemove(req?.body?.stockId);
  console.log("result : ", result);
});

router.post("/assetInquiry", async (req, res, next) => {
  res.json({
    result: await service.assetInquiry(req?.body?.username),
  });
});

router.post("/asset", async (req, res, next) => {
  const asset = req?.body;
  const { message, code } = await service.asset(asset);
  res.json({
    message,
    code,
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
  const result = await service.portfolioInquiry(req?.body?.username);
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
