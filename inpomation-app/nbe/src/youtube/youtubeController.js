const express = require("express");
const router = express.Router();
const service = require("./youtubeService");

router.post("/searchList", async (req, res, next) => {
  console.log("searchList 진입");
  const result = await service.searchList(req?.body);
  console.log("result : ", result);
});

module.exports = router;
