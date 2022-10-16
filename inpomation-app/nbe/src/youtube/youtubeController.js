const express = require("express");
const router = express.Router();
const service = require("./youtubeService");

router.post("/likeScoreUpdate", async (req, res, next) =>
  res.json(await service.likeScoreUpdate(req?.body))
);

router.post("/like", async (req, res, next) =>
  res.json(await service.like(req?.body))
);

router.post("/pagenationList", async (req, res, next) => {
  if (!req?.body) {
    alert("페이지 정보를 확인하세요.");
    return;
  }

  res.json({
    paging: req?.body,
    pagenationList: await service.pagenationList(req?.body),
  });
});

router.post("/adminSearch", async (req, res, next) =>
  res.json(await service.adminSearch(req?.body))
);

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

router.post("/delete", async (req, res, next) =>
  res.json(await service.delete(req?.body?.id))
);

module.exports = router;
