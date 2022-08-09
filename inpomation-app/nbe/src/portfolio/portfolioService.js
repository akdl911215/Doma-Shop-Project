const repository = require("./portfolioRepository");
const userRepository = require("../user/userRepository");

class portfolioService {
  async asset(asset) {
    console.log("asset : ", asset);
    const userDTO = await userRepository.userInquiry(asset?.username);
    console.log("asset userDTO : ", userDTO);
    return await repository.portfolioAsset({
      userId: userDTO?.id,
      stock: asset?.stock,
      stockHoldings: asset?.stockHoldings,
      buyPrice: asset?.buyPrice,
      dividend: asset?.dividend,
    });
  }

  async assetInquiry(username) {
    const userDTO = await userRepository.userInquiry(username);
    return await repository.portfolioAssetInquiry(userDTO.id);
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
    return await repository.portfolioInquiry(userDTO.id);
  }
}

module.exports = new portfolioService();
