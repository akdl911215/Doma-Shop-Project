const express = require("express");
const router = express.Router();
const service = require("./youtubeService");

router.post("/uploadList", async (req, res, next) => {
  res.json(await service.uploadList(req?.body));
});

router.post("/searchList", async (req, res, next) => {
  res.json(await service.searchList(req?.body));
});

router.post("/upload", async (req, res, next) => {
  res.json({
    result: await service.upload(req?.body),
  });
});

router.post("/list", async (req, res, next) =>
  res.json(await service.list(req?.body))
);

router.post("/myList", async (req, res, next) => {
  res.json(await service.myList(req?.body?.username));
});

module.exports = router;
