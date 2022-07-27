// const userRouter = require("./userRepository");
const userRepository = require("./userRepository");
const userModel = require("./userModel");

class userService {
  // userRouter.userRegister,
  async signup(user) {
    console.log("userService signup start!!");
    const cryptoSalt = await userModel.cryptoSalt();
    console.log("cryptoSalt : ", cryptoSalt);
    user.salt = cryptoSalt;
    const hashedPassword = await userModel.cryptoPbkdf2(user);
    user.password = hashedPassword;
    const sqlUser = await userRepository.userRegister(user);
    console.log("sqlUser : ", sqlUser);
    return { username: sqlUser?.username, password: sqlUser?.password };
  }
}

module.exports = new userService();

// https://node-js.tistory.com/22
