const userRepository = require("./userRepository");
const userModel = require("./userModel");
const jwt = require("../security/jwt");
const nodemailer = require("../config/mailer");
require("dotenv").config();
// const nodemailer = require("nodemailer");

class userService {
  async usernameCheck(username) {
    return await userRepository.usernameCheck(username);
  }

  emailAuth = async (email) => {
    const transfort = await nodemailer.transport();

    return await nodemailer.sendEmail({
      transPort: transfort,
      email: email?.email,
    });
  };

  search = async (search) => await userRepository.usersSearch(search);

  async list(page) {
    let start = 0;
    if (page.pageSize === undefined) page.pageSize = 5;

    page.page > 0 ? (start = (page.page - 1) * page.pageSize) : (page.page = 1);

    const pageListCount = Math.ceil(
      (await userRepository.userCount()) / page.pageSize
    );
    if (page.page > pageListCount) return null;

    const result = await userRepository.userList({
      start,
      pageSize: page.pageSize,
    });

    return {
      result,
      pageListCount,
    };
  }

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

  async remove(userId) {
    return await userRepository.userRemove(userId);
  }

  async inquiry(username) {
    return await userRepository.userInquiry(username);
  }
}

module.exports = new userService();
