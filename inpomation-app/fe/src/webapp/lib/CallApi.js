import Axios from "axios";
import { Client } from "webapp/api/Client";
import { backUrl } from "webapp/config/Config";

// 페이지 리스트 데이터 호출
export const UserPagenationListDataAPI = (pageNumber) => {
  console.log("UserPagenationListDataAPI pageNumber : ", pageNumber);
  Client.get(`${backUrl}/users/list`);
};
