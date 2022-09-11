import { client } from "./Client";
import { backUrl } from "../config/Config";

export const ProductInfomationModifyDataAPI = (states, formData, config) =>
  client.post(backUrl + "api/uploadfile", formData, config);

export const ProductInfomationRegisterDataAPI = (states) =>
  client.post(backUrl + "/product_infomation/register", states);
