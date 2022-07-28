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
    const { username, roles } = await userRepository.userSignin(user);
    const { token } = await jwt.sign(username);
    console.log(
      `signin username: ${username}, roles: ${roles}, token: ${token}`
    );

    return { username: username, token: token, roles: roles };
  }
}

module.exports = new userService();
