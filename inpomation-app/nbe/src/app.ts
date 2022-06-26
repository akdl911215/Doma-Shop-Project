const express = require("express");
const mysql = require("mysql2");
const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const session = require("express-session");
const crypto = require("crypto");
const FileStore = require("session-file-store")(session);
const cookieParser = require("cookie-parser");
// const user = require('../src/api/routes/users');
// const user = require('./api/routes/users/index');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// 위처럼 사용해도 되고, express 4.16버전 이상은 아래처럼 사용해도 됨
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use('/users', user);

// app.get("/", (req, res) => {
//     console.log("메인페이지 작동");
//     console.log(req.session);

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




app.use(
    session({
        secret: "keyboard cat", // 데이터를 암호화 하기 위해 필요한 옵션
        resave: false, // 요청이 왔을때 세션을 수정하지 않더라도 다시 저장소에 저장되도록
        saveUninitialized: true,  // 세션이 필요하면 세션을 실행시칸다(서버에 부담을 줄이기 위해)
        store : new FileStore() // 세션이 데이터를 저장하는 곳
    })
)

app.use(express.static(path.join(__dirname, "/public")));

// const client = mysql.createConnection({
//     user: "",
//     password: "",
//     database: ""
// })

// const http = require("http");
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Tyle': 'text/plain'});
//     res.write('Hello World!!!');
//     res.end();
// }).listen(PORT, () => console.log(`Listening on 'http://localhost:${PORT}`));
// router.listen(8080, () => console.log("Server is running"));

app.listen(PORT, () => console.log(`Listening on 'http://localhost:${PORT}`));




app.get("/productInfomation/register", (req, res) => res.send('상품 등록'));
app.get("/productInfomation/modify", (req, res) => res.send('상품 수정'));
app.get("/productInfomation/delete", (req, res) => res.send('상품 삭제'));


