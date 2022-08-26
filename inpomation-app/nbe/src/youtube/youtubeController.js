const express = require("express");
const router = express.Router();
const service = require("./youtubeService");

router.post("/searchList", async (req, res, next) => {
  const result = await service.searchList(req?.body);
  console.log("controller result : ", result);
  res.json({
    list: result?.items,
    pageInfo: result?.pageInfo,
  });
});

module.exports = router;
