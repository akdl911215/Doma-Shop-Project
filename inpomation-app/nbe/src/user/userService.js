const userRepository = require("./userRepository");
const userModel = require("./userModel");
const jwt = require("../security/jwt");

class userService {
  // userRouter.userRegister,
  async signup(user) {
    console.log("userService signup start!!");
    const cryptoSalt = await userModel.cryptoSalt();
    user.salt = cryptoSalt;
    const hashedPassword = await userModel.cryptoPbkdf2(user);
    user.password = hashedPassword;
    const sqlUser = await userRepository.userRegister(user);
    return { username: sqlUser?.username, password: sqlUser?.password };
  }

  async signin(user) {
    console.log("userService singnin start!!");
    const signUser = await userRepository.userSignin(user);
    const jwtToken = await jwt.sign(signUser?.username);
    console.log("jwtToken :::: ", jwtToken);

    return { username: signUser?.username, token: jwtToken.token };
  }
}

module.exports = new userService();

// https://node-js.tistory.com/22
