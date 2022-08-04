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

  async jwtToken(state) {
    const { code, message, roles } = await jwt.verify(state);
    return { code, message, roles };
  }

  async modify(user) {
    return await userRepository.userModify(user);
  }

  async inquiry(username) {
    return await userRepository.userInquiry(username);
  }
}

module.exports = new userService();
