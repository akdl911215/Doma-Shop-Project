const repository = require("./youtubeRepository");
const userRepository = require("../user/userRepository");

class youtubeService {
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
