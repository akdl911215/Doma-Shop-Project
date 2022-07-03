const express = require("express");
// const sqlDb = require('./config/database.js');
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const session = require("express-session");
const cors = require("cors");
// const crypto = require("crypto");
const FileStore = require("session-file-store")(session);
const cookieParser = require("cookie-parser");
const mainRouter = require("./api/routes/main/main");
const userRouter = require("./api/routes/users/users");
const publicRouter = require("./api/apiData/smokingAreaInGwangjinGu/smokingAreaInGwangjinGu");
const productInfomationRouter = require("./api/routes/productInfomation/productInfomation");
require("dotenv").config();
const hostname = "localhost";
const port = 8080;

app.use(cors());
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(
  session({
    secret: "keyboard cat", // 데이터를 암호화 하기 위해 필요한 옵션
    resave: true, // 요청이 왔을때 세션을 수정하지 않더라도 다시 저장소에 저장되도록
    saveUninitialized: true, // 세션이 필요하면 세션을 실행시칸다(서버에 부담을 줄이기 위해)
    store: new FileStore(), // 세션이 데이터를 저장하는 곳
  })
);

app.use("/", mainRouter);
// app.use("/users", userRouter);
app.use("/productInfomation", productInfomationRouter);
app.route("/users/signup").post(userRouter.userRegister);
app.route("/users/signin").post(userRouter.userSignin);
app.route("/users/logout").get(userRouter.userLogout);
app
  .route("/publicData/smokingAreaInGwangjinGu")
  .get(publicRouter.smokingAreaInGwangjinGu);

app.get("/process/example", (req, res) => {
  if (req.session.user) {
    // 세션에 유저가 존재한다면
    res.redirect("/example.html");
  } else {
    res.redirect("/login.html");
  }
});
