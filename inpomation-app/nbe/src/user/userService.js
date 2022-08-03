const userRepository = require("./userRepository");
const userModel = require("./userModel");
const jwt = require("../security/jwt");
const { password } = require("../config/database");

class userService {
  async signup(user) {
    const cryptoSalt = await userModel.cryptoSalt();
    user.salt = cryptoSalt;
    user.password = await userModel.cryptoPbkdf2(user);
    const sqlUser = await userRepository.userRegister(user);

    return { username: sqlUser?.username, password: sqlUser?.password };
  }

  async signin(user) {
    console.log("signin user : ", user);
    const { username, roles } = await userRepository.userSignin(user);
    console.log(`username: ${username}, roles: ${roles}`);
    const { token } = await jwt.sign(username);
    console.log("signin token : ", token);

    return { username, token, roles };
  }

  async jwtToken(state) {
    const { code, message, roles } = await jwt.verify(state);
    console.log(`code : ${code}, message : ${message}, roles : ${roles}`);

    return { code, message, roles };
  }

  async modify(username) {
    console.log("service modify : ", username);
    const test = await userRepository.userModify(username);
  }

  async inquiry(username) {
    return await userRepository.userInquiry(username);
  }
}

module.exports = new userService();
