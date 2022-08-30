const repository = require("./youtubeRepository");
const userRepository = require("../user/userRepository");

class youtubeService {
  async upload(video) {
    console.log("service video : ", video);
    const user = await userRepository.userInquiry(video?.username);
    const result = await repository.upload({
      userId: user?.id,
      username: video?.username,
      url: video?.url,
      title: video?.title,
    });

    console.log("service result : ", result);
    return result;
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
