import { client } from "./Client";
import { backUrl } from "../config/Config";

export const EconomicIndexKospiDataAPI = (kospi) =>
  client.post(backUrl + "/economic_index/kospi", kospi);
