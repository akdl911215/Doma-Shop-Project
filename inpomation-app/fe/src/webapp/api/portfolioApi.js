import { client } from "./Client";
import { backUrl } from "webapp/config/Config";

export const CashAssetDataAPI = (cashAsset) =>
  client.post(backUrl + "/portfolio/cashAsset", cashAsset);

export const FortfolioInquiryDataAPI = (user) => {
  console.log("FortfolioInquiryDataAPI user : ", user);
  return client.post(backUrl + "/portfolio/inquiry", user);
};
