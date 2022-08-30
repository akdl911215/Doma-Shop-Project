const express = require("express");
const router = express.Router();
const service = require("./youtubeService");

router.post("/searchList", async (req, res, next) => {
  res.json({
    list: await service.searchList(req?.body),
  });
});

router.post("/upload", async (req, res, next) => {
  const result = await service.upload(req?.body);
});

module.exports = router;
