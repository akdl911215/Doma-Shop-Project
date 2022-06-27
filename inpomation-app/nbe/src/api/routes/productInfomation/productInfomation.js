const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => res.send('상품 등록'));
router.get("/modify", (req, res) => res.send('상품 수정'));
router.get("/delete", (req, res) => res.send('상품 삭제'));

module.exports = router;