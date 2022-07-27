const userRouter = require("./userRepository");
const userRepository = require("./userRepository");

class userService {
  // userRouter.userRegister,
  async signup(user) {
    const signupUser = await userRouter.userRegister(user);
    // const returnUser = await userRepository.userRegister(userDTO);
    console.log("signupUser : ", signupUser);
    // console.log("returnUser : ", returnUser);
    return { username: signupUser?.username, password: signupUser?.password };
  }
}

module.exports = new userService();
