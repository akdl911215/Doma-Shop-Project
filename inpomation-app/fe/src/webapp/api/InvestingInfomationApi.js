import { client } from "./Client";
import { backUrl } from "../config/Config";

export const ProductInfomationModifyDataAPI = (states, formData, config) =>
  client.post(backUrl + "api/uploadfile", formData, config);

export const InvestingRgisterDataAPI = (boardState) =>
  client.post(backUrl + "/investing_infomation/register", boardState);

export const InvestingListDataAPI = () =>
  client.post(backUrl + "/investing_infomation/list");
