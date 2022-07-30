const userRepository = require("./userRepository");
const userModel = require("./userModel");
const jwt = require("../security/jwt");

class userService {
  async signup(user) {
    const cryptoSalt = await userModel.cryptoSalt();
    user.salt = cryptoSalt;
    user.password = await userModel.cryptoPbkdf2(user);
    const sqlUser = await userRepository.userRegister(user);

    return { username: sqlUser?.username, password: sqlUser?.password };
  }

  async signin(user) {
    const { username, roles } = await userRepository.userSignin(user);
    const { token } = await jwt.sign(username);

    return { username, token, roles };
  }

  async jwtToken(jwtToken) {
    const { code, message, roles } = await jwt.verify(jwtToken);
    console.log(`code : ${code}, message : ${message}, roles : ${roles}`);

    return { code, message, roles };
  }
}

module.exports = new userService();
