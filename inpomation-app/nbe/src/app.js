const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mainRouter = require("./api/routes/main/main");
const userRouter = require("./user/userController");
const portfolioRouter = require("./portfolio/portfolioController");
const publicSmokingRouter = require("./api/apiData/smokingAreaInGwangjinGu/smokingAreaInGwangjinGu");
const publicImportAndExportRouter = require("./api/apiData/importAndExportPerformence/cityAndProvince");
const cityAndProvinceByItemRouter = require("./api/apiData/importAndExportPerformence/cityAndProvinceByItem");
const productInfomationRouter = require("./api/routes/productInfomation/productInfomation");
const cityAndProvinceByNatureRouter = require("./api/apiData/importAndExportPerformence/cityAndProvinceByNature");
const youtubeRouter = require("./youtube/youtubeController");
const economicIndexRouter = require("./economicIndex/economicController");
const investingRouter = require("./investing/investingController");

require("dotenv").config();
const hostname = "localhost";
const PORT = process.env.PORT || 8080;

app.use(cors());
app.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(cookieParser());

app.use("/", mainRouter);
app.use("/users", userRouter);
app.use("/portfolio", portfolioRouter);
app.use("/productInfomation", productInfomationRouter);
app.use("/youtube", youtubeRouter);
app.use("/investing_infomation", investingRouter);
app.use("/economic_index", economicIndexRouter);
// app.post("/users/signup", userRouter.userRegister);
// app.post("/users/signin", userRouter.userSignin);

// app.post("/users/payload", verify);
// app.get("/users/logout", userRouter.userLogout);
app.get(
  "/publicData/smokingAreaInGwangjinGu",
  publicSmokingRouter.smokingAreaInGwangjinGu
);

app.post(
  "/publicData/cityAndProvice",
  publicImportAndExportRouter.cityAndProvince
);
app.post(
  "/publicData/cityAndProviceByItem",
  cityAndProvinceByItemRouter.cityAndProvinceByItem
);
app.post(
  "/publicData/cityAndProviceByNature",
  cityAndProvinceByNatureRouter.cityAndProvinceByNature
);

app.get("/process/example", (req, res) => {
  if (req.session.user) {
    // 세션에 유저가 존재한다면
    res.redirect("/example.html");
  } else {
    res.redirect("/login.html");
  }
});
