const express = require("express");
const router = express.Router();
const service = require("./youtubeService");

router.post("/searchList", async (req, res, next) => {
  const result = await service.searchList(req?.body);
});
