import { client } from "./Client";
import { backUrl } from "webapp/config/Config";

export const CityAndProvinceAPI = (param) =>
  client.post(backUrl + "/publicData/cityAndProvice", param);

export const CityAndProvinceByItemAPI = (param) =>
  client.post(backUrl + "/publicData/cityAndProviceByItem", param);

export const CityAndProvinceByNatureAPI = (param) =>
  client.post(backUrl + "/publicData/cityAndProviceByNature", param);
