const repository = require("./youtubeRepository");
const userRepository = require("../user/userRepository");

class youtubeService {
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
      const arrLength = list.items.length;
      for (let i = 0; i < arrLength; ++i) {
        const result = await repository.searchVideos({
          id: list?.items[i]?.id?.videoId,
        });
        arr.push(result);
      }

      let returnValue = [];
      for (let i = 0; i < arrLength; ++i) {
        const state = {
          pageInfo: list?.pageInfo,
          id: list?.items[i]?.id,
          items: JSON.parse(arr[i]),
        };
        returnValue.push(state);
      }
      return returnValue;
    } catch (err) {
      console.error("youtube search list error : ", err);
    }
  }
}

module.exports = new youtubeService();
