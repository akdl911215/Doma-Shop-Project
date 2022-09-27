const express = require("express");
const router = express.Router();
const service = require("./investingService");

router.post("/commentRegister", async (req, res, next) =>
  res.json(await service.commentRegister(req?.body))
);

router.post("/read", async (req, res, next) =>
  res.json(await service.read(req?.body))
);

router.post("/register", async (req, res, next) =>
  res.json(await service.register(req?.body))
);

router.post("/list", async (req, res, next) => res.json(await service.list()));

module.exports = router;
