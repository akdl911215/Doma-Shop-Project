import { client } from "./Client";
import { backUrl } from "webapp/config/Config";
import { Axios } from "axios";

export const UserPagenationListDataAPI = (page) => {
  console.log("page : ", page);

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

export const UserPayloadDataAPI = (payload) => {
  console.log("!!!! ", payload);

  Axios.defaults.headers.common["Authorization"] = `Bearer ${payload}`;
  client.post(
    backUrl + `/users/payload`,
    payload
    // , {
    // headers: {
    //   Authorization: "Bearer" + localStorage.getItem("jwtToken"),
    // },
    // }
  );
};
