import { client } from "./Client";
import { backUrl } from "webapp/config/Config";

export const YoutubeSearchListDataAPI = (search) =>
  client.post(backUrl + "/youtube/searchList", search);
