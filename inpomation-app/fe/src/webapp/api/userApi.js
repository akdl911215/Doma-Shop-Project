import { client } from "./Client";
import { backUrl } from "webapp/config/Config";

export const UserPagenationListDataAPI = (page) => {
  const str =
    "page=" +
    (page ? page : 1) +
    "&type=" +
    (page.type ? page.type : "") +
    "&keyword=" +
    (page.keyword ? page.keyword : "");
  return client.get(backUrl + "/users/list?" + str);
};

export const UserSignupDataAPI = (states) =>
  client.post(backUrl + "/users/signup", states);

export const UserSigninDataAPI = (states) =>
  client.post(backUrl + "/users/signin", states);

export const UserModifyDataAPI = (user) =>
  client.post(backUrl + "/users/modify", user);

export const UserInquiryDataAPI = (user) =>
  client.post(backUrl + "/users/inquiry", { username: user });

export const UserAuthDataAPI = () => {
  client.defaults.headers.common["Authorization"] =
    "Bearer " + sessionStorage.getItem("jwtToken");
  return client.post(backUrl + `/users/auth`, {
    roles: sessionStorage.getItem("roles"),
  });
};
