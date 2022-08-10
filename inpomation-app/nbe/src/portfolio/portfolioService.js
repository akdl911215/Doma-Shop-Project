const repository = require("./portfolioRepository");
const userRepository = require("../user/userRepository");

class portfolioService {
  async assetRemove(stockId) {
    return await repository.portfolioAssetRemove(stockId);
  }

  async asset(asset) {
    const userDTO = await userRepository.userInquiry(asset?.username);
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
