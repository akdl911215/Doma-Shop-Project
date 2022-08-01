import { client } from "./Client";
import { backUrl } from "../config/Config";

export const ProductInfomationModifyDataAPI = (states, formData, config) => {
  const url = backUrl + "api/uploadfile";

  return client.post(url, formData, config);
};

export const ProductInfomationRegisterDataAPI = (states) => {
  const url = backUrl + "/product_infomation/register";

  return client.post(url, states);
};
