import { client } from "webapp/api/client";
import { backUrl } from "webapp/config/config";

export const ProductInfomationModifyDataAPI = (states, formData, config) => {
  const url = backUrl + "api/uploadfile";

  return client.post(url, formData, config);
};

export const ProductInfomationRegisterDataAPI = (states) => {
  const url = backUrl + "/product_infomation/register";

  return client.post(url, states);
};
