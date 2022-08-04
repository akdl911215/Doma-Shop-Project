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

export const UserModifyDataAPI = (user) => {
  console.log("modify 실행!!");

  return client.post(backUrl + "/users/modify", user);
};

export const UserInquiryDataAPI = (user) => {
  console.log("inquiry 실행");

  return client.post(backUrl + "/users/inquiry", { username: user });
};

export const UserAuthDataAPI = (token, roles) => {
  console.log("!!!! ", token, "/ ", roles, "/ ");

  client.defaults.headers.common["Authorization"] = "Bearer " + token;
  return client.post(backUrl + `/users/auth`, {
    roles: roles,
  });
};
