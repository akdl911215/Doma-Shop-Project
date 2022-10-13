const repository = require("./youtubeRepository");
const userRepository = require("../user/userRepository");

class youtubeService {
  async like(data) {
    const inquiryUser = await userRepository.userInquiry(data?.username);

    return await repository.like({
      ...data,
      userId: inquiryUser?.id,
    });
  }

  async pagenationList(page) {
    let start = 0;
    if (page.pageSize === undefined) page.pageSize = 5;

    page.page > 0 ? (start = (page.page - 1) * page.pageSize) : (page.page = 1);

    const pagenationCount = Math.ceil(
      (await repository.youtubeListCount()) / page.pageSize
    );
    if (page.page > pagenationCount) return null;

    const result = await repository.pagenationList({
      start,
      pageSize: page.pageSize,
    });

    return {
      result,
      pagenationCount,
    };
  }

  async adminSearch(search) {
    return await repository.adminSearch(search);
  }

  delete = async (id) => await repository.delete(id);

  async myList(usename) {
    const inquiryUser = await userRepository.userInquiry(usename);
    return await repository.myList(inquiryUser?.id);
  }

  async uploadList(search) {
    return await repository.uploadList(search);
  }

  list = async (page) => await repository.list(page);

  async upload(video) {
    const user = await userRepository.userInquiry(video?.username);
    return await repository.upload({
      userId: user?.id,
      username: video?.username,
      ...video,
    });
  }

  async searchList(search) {
    try {
      const list = await repository.searchList(search);

      let arr = [];
      for (let i = 0; i < list.items.length; ++i) {
        const result = await repository.searchVideos({
          id: list?.items[i]?.id?.videoId,
        });
        arr.push(result);
      }

      return list?.items?.map((el, key) => {
        return {
          pageInfo: list?.pageInfo,
          id: el?.id,
          items: JSON.parse(arr[key]),
        };
      });
    } catch (err) {
      console.error("youtube search list error : ", err);
    }
  }
}

module.exports = new youtubeService();
