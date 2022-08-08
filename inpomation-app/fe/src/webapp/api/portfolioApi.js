import { client } from "./Client";
import { backUrl } from "webapp/config/Config";

export const CashAssetDataAPI = (cashAsset) =>
  client.post(backUrl + "/portfolio/cashAsset", cashAsset);

export const FortfolioInquiryDataAPI = (user) =>
  client.post(backUrl + "/portfolio/inquiry", user);

export const AssetDataAPI = (asset) => {
  console.log("asset : ", asset);
  return client.post(backUrl + "/portfolio/asset", asset);
};

export const AssetInquiryDataAPI = (asset) => {
  console.log("AssetInquiryDataAPI asset : ", asset);
  return client.post(backUrl + "/portfolio/assetInquiry", asset);
};
