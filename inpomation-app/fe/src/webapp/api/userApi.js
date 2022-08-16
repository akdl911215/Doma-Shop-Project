import { client } from "./Client";
import { backUrl } from "webapp/config/Config";

export const UserListSearchDataAPI = (search) =>
  client.post(backUrl + "/users/search", search);

export const UserPagenationListDataAPI = (page) =>
  client.post(backUrl + "/users/list", { page, pageSize: 5 });

export const UserRemoveDataAPI = (userId) =>
  client.post(backUrl + "/users/remove", userId);

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
