const express = require("express");
const PORT = process.env.PORT || 8080;

const app = express();

// const http = require("http");
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Tyle': 'text/plain'});
//     res.write('Hello World!!!');
//     res.end();
// }).listen(PORT, () => console.log(`Listening on 'http://localhost:${PORT}`));
// router.listen(8080, () => console.log("Server is running"));

app.listen(PORT, () => console.log(`Listening on 'http://localhost:${PORT}`));

app.get("/", (req, res) => res.send('Welcome my home'));

app.get("/users/list", (req, res) => res.send('유저 리스트'));
app.get("/users/signup", (req, res) => res.send('회원가입'));
app.get("/users/signin", (req, res) => res.send('로그인'));

app.get("/productInfomation/register", (req, res) => res.send('상품 등록'));
app.get("/productInfomation/modify", (req, res) => res.send('상품 수정'));
app.get("/productInfomation/delete", (req, res) => res.send('상품 삭제'));


