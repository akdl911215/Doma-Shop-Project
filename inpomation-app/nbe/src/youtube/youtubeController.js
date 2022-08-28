const express = require("express");
const router = express.Router();
const service = require("./youtubeService");

router.post("/searchList", async (req, res, next) => {
  res.json({
    list: await service.searchList(req?.body),
  });
});

module.exports = router;
