import React, { useState } from "react";
import { YoutubeSearchListDataAPI } from "webapp/api/youubeApi";
import styles from "webapp/youtube-upload/style/searchBar/SearchBar.module.css";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const searchList = () => {
    YoutubeSearchListDataAPI({ q: search })
      .then((res) => {
        setData(
          res?.data?.map((el) => {
            return {
              id: el?.id?.videoId,
              channelId: el?.items?.items[0]?.snippet?.channelId,
              title: el?.items?.items[0]?.snippet?.title,
              thumbnail: el?.items?.items[0]?.snippet?.thumbnails?.high?.url,
              description: el?.items?.items[0]?.snippet?.description,
              channelTitle: el?.items?.items[0]?.snippet?.channelTitle,
              viewCount: el?.items?.items[0]?.statistics?.viewCount,
              likeCount: el?.items?.items[0]?.statistics?.likeCount,
              channelUrl: "",
              channelThumbnail: el?.snippet?.thumbnails?.high?.url,
              date: el?.snippet?.publishedAt,
            };
          })
        );
      })
      .catch((err) =>
        console.error("YoutubeSearchListDataAPI catch error : ", err)
      );
  };
  return (
    <>
      <div>
        <input
          placeholder="유튜브 제목을 검색하세요"
          className={styles.youtubeSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchList} className={styles.searchButton}>
          검색
        </button>
      </div>
    </>
  );
};

export default SearchBar;
