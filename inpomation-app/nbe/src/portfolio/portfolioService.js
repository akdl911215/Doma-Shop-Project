const repository = require("./portfolioRepository");
const userRepository = require("../user/userRepository");

class portfolioService {
  async asset(asset) {
    const userDTO = await userRepository.userInquiry(asset?.username);
    console.log("asset userDTO : ", userDTO);
    const result = await repository.portfolioAsset(userDTO);
    console.log("asset result: ", result);
  }

  async assetImquiry(username) {
    const userDTO = await userRepository.userInquiry(username);
  }

  async cashAsset(cashAndAsset) {
    const userDTO = await userRepository.userInquiry(cashAndAsset?.username);
    return await repository.portfolioCashAsset({
      cash: cashAndAsset.cash,
      asset: cashAndAsset.asset,
      username: cashAndAsset.username,
      id: userDTO.id,
    });
  }

  async portfolioInquiry(username) {
    const userDTO = await userRepository.userInquiry(username);
    console.log("userDTO : ", userDTO);
    return await repository.portfolioInquiry(userDTO.id);
  }
}

module.exports = new portfolioService();
