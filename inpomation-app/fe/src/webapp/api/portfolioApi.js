import { client } from "./Client";
import { backUrl } from "webapp/config/Config";

export const CashAssetDataAPI = (cashAsset) => {
  console.log("cashAsset : ", cashAsset);
  return client.post(backUrl + "/portfolio/cashAsset", cashAsset);
};
