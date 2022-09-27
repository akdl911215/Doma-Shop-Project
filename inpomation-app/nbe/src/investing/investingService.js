const repository = require("./investingRepository");
const userRepository = require("../user/userRepository");

class investingService {
  commentRegister = async (data) => await repository.commentRegister(data);

  async read(id) {
    const comments = await repository.commentRead(id);
    const board = await repository.read(id);
    return {
      ...board,
      ...comments,
    };
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
