const repository = require("./investingRepository");
const userRepository = require("../user/userRepository");

class investingService {
  viewCount = async (boardId) => await repository.viewCount(boardId);

  async pageList(page) {
    let start = 0;
    if (page.pageSize === undefined) page.pageSize = 15;

    page.page > 0 ? (start = (page.page - 1) * page.pageSize) : (page.page = 1);

    const pagenationCount = Math.ceil(
      (await repository.investingBoardCount()) / page.pageSize
    );

    if (page.page > pagenationCount) return null;

    const result = await repository.investingPageList({
      start,
      pageSize: page.pageSize,
    });

    return {
      result,
      pagenationCount,
    };
  }

  commentDelete = async (id) => await repository.commentDelete(id);

  delete = async (id) => await repository.delete(id);

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
