const express = require("express");
const router = express.Router();
const service = require("./investingService");

router.post("/modify", async (req, res, next) =>
  res.json(await service.modify(req?.body))
);

router.post("/viewCount", async (req, res, next) =>
  res.json(await service.viewCount(req?.body))
);

router.post("/commentDelete", async (req, res, next) =>
  res.json(await service.commentDelete(req?.body))
);

router.post("/delete", async (req, res, next) =>
  res.json(await service.delete(req?.body))
);

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

router.post("/pageList", async (req, res, next) =>
  res.json(await service.pageList(req?.body))
);

module.exports = router;
