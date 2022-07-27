// const router = express();
const express = require("express");
const router = express.Router();
const userService = require("./userService");
router.post("/signup", async (req, res, next) => {
  const userDTO = req.body;
  console.log("userDTO : ", userDTO);
  const { username, password } = await userService.signup(userDTO);
  console.log(`username: ${username}, password: ${password}`);
});

// router.post("/signin", userRouter.userSignin);

// router.post("/payload", verify);
// router.get("/logout", userRouter.userLogout);

module.exports = router;
