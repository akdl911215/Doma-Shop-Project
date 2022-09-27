import { client } from "./Client";
import { backUrl } from "../config/Config";

export const ProductInfomationModifyDataAPI = (states, formData, config) =>
  client.post(backUrl + "api/uploadfile", formData, config);

export const InvestingRgisterDataAPI = (boardState) =>
  client.post(backUrl + "/investing_infomation/register", boardState);

export const InvestingListDataAPI = () =>
  client.post(backUrl + "/investing_infomation/list");

export const InvestingReadBoardIdDataAPI = (id) =>
  client.post(backUrl + "/investing_infomation/read", id);

export const InvestingCommentRegisterDataAPI = (data) =>
  client.post(backUrl + "/investing_infomation/commentRegister", data);
