const express = require('express');
// const sqlDb = require('./config/database.js');
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const session = require("express-session");
// const crypto = require("crypto");
const FileStore = require("session-file-store")(session);
const cookieParser = require("cookie-parser");
const mainRouter = require("./api/routes/main/main");
const userRouter = require("./api/routes/users/users");
const productInfomationRouter = require("./api/routes/productInfomation/productInfomation");
require("dotenv").config();
const hostname = 'localhost';
const port = 8080;
// console.log("DB_USER : ", process.env.DB_USER); 
// console.log("DB_PASSWORD : ", process.env.DB_PASSWORD); 
// console.log("DB_HOST : ", process.env.DB_HOST); 
// console.log("DB_PORT : ", process.env.DB_PORT); 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(
//     session({
//         secret: "keyboard cat", // 데이터를 암호화 하기 위해 필요한 옵션
//         resave: false, // 요청이 왔을때 세션을 수정하지 않더라도 다시 저장소에 저장되도록
//         saveUninitialized: true,  // 세션이 필요하면 세션을 실행시칸다(서버에 부담을 줄이기 위해)
//         store : new FileStore() // 세션이 데이터를 저장하는 곳
//     })
// )

app.use(express.static(path.join(__dirname, "/public")));

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})
app.use("/", mainRouter);
// app.use("/users", userRouter);
app.use("/productInfomation", productInfomationRouter);
app.route('/users/register').post(userRouter.userRegister)





// https://webaura.tistory.com/entry/NodeJS-%EB%A1%9C%EA%B7%B8%EC%9D%B8%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85%ED%8E%B8