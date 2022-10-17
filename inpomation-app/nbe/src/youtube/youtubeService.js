const repository = require("./youtubeRepository");
const userRepository = require("../user/userRepository");
const date = require("../common/date");
const currentDate = date.today();

class youtubeService {
  async userLikeInquirty(username) {
    const inquiryUser = await userRepository.userInquiry(username?.username);

    return await repository.userLikeInquiry({ userId: inquiryUser?.id });
  }

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

  async likeScoreUpdate(page) {
    const result = await repository.list(page);

    for (let i = 0; i < result?.list?.length; ++i) {
      const likeInquiry = await repository.likeScore({
        videoId: result?.list[i]?.video_id,
      });

      let score = 0; // default +1 score
      for (let j = 0; j < likeInquiry?.success?.length; ++j) {
        const inquiryDay = new Date(likeInquiry?.success[0]?.like_date);
        const currDay = new Date(currentDate);

        let diff = currDay - inquiryDay;
        const diffDays = Math.floor(
          (currDay.getTime() - inquiryDay.getTime()) / (1000 * 60 * 60 * 24)
        );
        diff -= diffDays * (1000 * 60 * 60 * 24); // 하루
        const diffHours = Math.floor(diff / (1000 * 60 * 60)); // 한시간
        diff -= diffHours * (1000 * 60 * 60);
        const diffMin = Math.floor(diff / (1000 * 60)); // 1분
        diff -= diffMin * (1000 * 60);
        const diffSec = Math.floor(diff / 1000); // 1초

        if (diffDays <= 3) {
          // 3점
          score += 3;
        } else if (diffDays <= 7) {
          // 2점
          score += 2;
        } else {
          // 1점
          score += 1;
        }
      }

      return await repository.updateLikeScore({
        videoId: result?.list[i]?.video_id,
        score: score,
      });
    }
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
