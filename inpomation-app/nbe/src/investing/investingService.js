const repository = require("./investingRepository");
const userRepository = require("../user/userRepository");

class investingService {
  async commentRegister(data) {
    return await repository.commentRegister(data);
  }

  async read(id) {
    return await repository.read(id);
  }

  async register(state) {
    const user = await userRepository.userInquiry(state?.writer);
    return await repository.register({
      ...state,
      userId: user?.id,
    });
  }

  list = async (state) => await repository.list(state);
}

module.exports = new investingService();
