const repository = require("./youtubeRepository");

class youtubeService {
  async searchList(search) {
    return await repository.searchList(search);
  }
}

module.exports = new youtubeService();
