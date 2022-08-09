import { client } from "./Client";
import { backUrl } from "webapp/config/Config";

export const CashAssetDataAPI = (cashAsset) =>
  client.post(backUrl + "/portfolio/cashAsset", cashAsset);

export const FortfolioInquiryDataAPI = (user) =>
  client.post(backUrl + "/portfolio/inquiry", user);

export const AssetDataAPI = (asset) =>
  client.post(backUrl + "/portfolio/asset", asset);

export const AssetInquiryDataAPI = (asset) =>
  client.post(backUrl + "/portfolio/assetInquiry", asset);
