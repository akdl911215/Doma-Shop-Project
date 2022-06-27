const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("home 임")
    console.log("메인페이지 작동");
    console.log(req.session);
});

// app.get("/", (req, res) => {
//     res.send("home22");
//     // if(req.session.is_login === true) {
//     //     res.render("index", {
//     //         is_logined : req.session.is_login,
//     //         name : req.session.name
//     //     });
//     // } else {
//     //     res.render("index", {
//     //         is_logined : false
//     //     });
//     // }
// });

module.exports = router;