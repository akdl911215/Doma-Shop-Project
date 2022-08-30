import { client } from "./Client";
import { backUrl } from "webapp/config/Config";

export const YoutubeSearchListDataAPI = (search) =>
  client.post(backUrl + "/youtube/searchList", search);

export const YoutubeUploadDataAPI = (video) =>
  client.post(backUrl + "/youtube/upload", video);
