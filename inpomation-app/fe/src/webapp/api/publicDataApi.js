import { client } from "./Client";
import { backUrl } from "webapp/config/Config";

export const CityAndProvinceAPI = (param) => {
  console.log("param : ", param);

  const str =
    "sidoCd=" +
    param.sidoCode +
    "&strtYymm=" +
    param.startDate +
    "&endYymm=" +
    param.endDate;

  const url = backUrl + "/publicData/cityAndProvice?" + str;
  console.log("url : ", url);
  return client.get(url);
};
