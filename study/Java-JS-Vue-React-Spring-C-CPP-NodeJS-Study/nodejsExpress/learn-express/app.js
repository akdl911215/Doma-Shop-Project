var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session");
// flash : 일회성 메시지들을 웹 브라우저에 나타낼 때 사용
var flash = require("connect-flash");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

// 1 start
// express 패키지를 호출하여 app 변수 객체를 만든다. 이제 이 변수에 각종 기능을 연결한다.
var app = express();
// 1 end

// 2 start
// app.set 메서드로 익스프레스 앱을 설정할 수 있다.
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(function (req, res, next) {
  console.log(req.url, "저도 미들웨어입니다.");
  next();
});

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "sceret code",
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

app.use(flash());

app.use("/", indexRouter);
app.use("/users", usersRouter);

// 404 처리 미들웨어
app.use(function (req, rs, next) {
  next(createError(404));
});

// 에러 핸들러
app.use(function (err, req, res, next) {
  // set locals, only prioviding error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
// 2 end

// 3 start
// 중간 부분에 app.use로 시작하는 코드가 많은데, 미들웨어를 연결하는 부분이다.
app.use(logger("dev")); // dev 대신 short, common, combined 등을 줄 수 있다.

// static 미들웨어는 정적인 파일들을 제공
app.use(express.static(path.join(__dirname, "public")));

// express 4.16.0 버전부터는 body-arser의 일부 기능이 익스프레스에 내장되었기에 설치하지 않고
// express.json() 과 express.urlencoded({ extended: false }) 사용 가능
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 요청에 등봉된 쿠키를 해석
app.use(cookieParser("secret code"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// 3 end

// 4 start
// 마지막에는 app 객체를 모듈로 만든다. 이것이 bin/www에서 사용된 app 모듈이다.
module.exports = app;
// 4 end
