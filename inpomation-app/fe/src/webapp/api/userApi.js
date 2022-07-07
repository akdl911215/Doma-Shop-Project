import { client } from "./Client";
import { backUrl } from "webapp/config/Config";

export const UserPagenationListDataAPI = (page) => {
  console.log("page : ", page);

  const str =
    "page=" +
    (page ? page : 1) +
    "&type=" +
    (page.type ? page.type : "") +
    "&keyword=" +
    (page.keyword ? page.keyword : "");

  const url = backUrl + "/users/list?" + str;

  console.log("url : ", url);
  return client.get(url);
};

export const UserSignupDataAPI = (states) => {
  const url = backUrl + "/users/signup";
  console.log("url :: ", url);
  return client.post(url, states);
};

export const UserSigninDataAPI = (states) => {
  const url = backUrl + "/users/signin";

  return client.post(url, states);
};
