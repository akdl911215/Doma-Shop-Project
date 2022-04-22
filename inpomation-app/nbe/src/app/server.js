let express = require("express");
let lottoController = require("../controller/lotto.controller");

let router = express();
router.listen(80, () => console.log("Server is running"));

router.get("/", (reg, res) => res.send("Hello Node"));

router.route("/lotto/").get(lottoController.getLotto);

router.route("/lotto/:number").get(lottoController.getLotto);
