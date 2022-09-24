const repository = require("./investingRepository");
const userRepository = require("../user/userRepository");

class investingService {
  async register(state) {
    const user = await userRepository.userInquiry(state?.writer);
    return await repository.register({
      ...state,
      userId: user?.id,
    });
  }

  async list(state) {
    return await repository.list(state);
  }
}

module.exports = new investingService();
