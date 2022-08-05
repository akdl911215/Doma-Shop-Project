const express = require("express");
const router = express.Router();
const service = require("./portfolioService");

router.post("/cashAsset", async (req, res, next) => {
  const cashASset = req?.body;
  console.log("cashASset : ", cashASset);
  const test = await service.cashAsset(cashASset);
});
