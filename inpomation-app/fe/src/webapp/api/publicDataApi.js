import { client } from "./Client";
import { backUrl } from "webapp/config/Config";

export const CityAndProvinceAPI = (param) =>
  client.post(backUrl + "/publicData/cityAndProvice", param);
