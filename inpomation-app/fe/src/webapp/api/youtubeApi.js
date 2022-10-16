import { client } from "./Client";
import { backUrl } from "webapp/config/Config";

export const YoutubeLikeScoreUpdateDataAPI = () =>
  client.post(backUrl + "/youtube/likeScoreUpdate");

export const YoutubeLikeClickDataAPI = (data) =>
  client.post(backUrl + "/youtube/like", data);

export const YoutubeSearchListDataAPI = (search) =>
  client.post(backUrl + "/youtube/searchList", search);

export const YoutubeUploadDataAPI = (video) =>
  client.post(backUrl + "/youtube/upload", video);

export const YoutubeListDataAPI = (page) =>
  client.post(backUrl + "/youtube/list", { viewPage: page });

export const YoutubeUploadListDataAPI = (uploadSearch) =>
  client.post(backUrl + "/youtube/uploadList", uploadSearch);

export const YoutubeMyListDataAPI = () =>
  client.post(backUrl + "/youtube/myList", {
    username: sessionStorage.getItem("username"),
  });

export const YoutubeDeleteDataAPI = (id) =>
  client.post(backUrl + "/youtube/delete", id);

export const YoutubeAdminSearchDataAPI = (search) =>
  client.post(backUrl + "/youtube/adminSearch", search);

export const YoutubePagenationListDataAPI = (page) =>
  client.post(backUrl + "/youtube/pagenationList", {
    page,
    pageSize: 5,
  });
