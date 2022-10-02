import { client } from "./Client";
import { backUrl } from "../config/Config";

export const InvestingViewCountUpdateDataAPI = (id) =>
  client.post(backUrl + "/investing_infomation/viewCount", id);

export const InvestingModifyDataAPI = (id) =>
  client.post(backUrl + "/investing_infomation/modify", id);

export const InvestingBoardModifyDataAPI = (board) =>
  client.post(backUrl + "/investing_infomation/boardModify", board);

export const InvestingRgisterDataAPI = (boardState) =>
  client.post(backUrl + "/investing_infomation/register", boardState);

// export const InvestingListDataAPI = () =>
//   client.post(backUrl + "/investing_infomation/list");

export const InvestingBoardPagenationListDataAPI = (page) =>
  client.post(backUrl + "/investing_infomation/pageList", {
    page,
    pageSize: 15,
  });

export const InvestingReadBoardIdDataAPI = (id) =>
  client.post(backUrl + "/investing_infomation/read", id);

export const InvestingCommentRegisterDataAPI = (data) =>
  client.post(backUrl + "/investing_infomation/commentRegister", data);

export const InvestingBoardDeleteDataAPI = (id) =>
  client.post(backUrl + "/investing_infomation/delete", id);

export const InvestingBoardCommentDeleteDataAPI = (id) =>
  client.post(backUrl + "/investing_infomation/commentDelete", id);

// export const InvestingCommentReadDataAPI = (boardId) =>
//   client.post(backUrl + "/investing_infomation/commentRead", boardId);
