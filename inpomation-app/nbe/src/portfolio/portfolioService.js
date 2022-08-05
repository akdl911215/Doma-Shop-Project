const repository = require("./portfolioRepository");

class portfolioService {
  async cashAsset(cashAndAsset) {
    const test = await repository.cashASset(cashAndAsset);
  }
}
