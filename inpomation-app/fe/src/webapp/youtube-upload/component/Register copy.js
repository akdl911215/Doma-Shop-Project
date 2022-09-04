import React, { useState } from "react";
import styles from "../style/Register.module.css";
import { Table, Container, Checkbox, Button } from "semantic-ui-react";
import { YoutubeSearchListDataAPI } from "webapp/api/youubeApi";
import { useNavigate } from "react-router-dom";
import GoHomeButton from "webapp/common/component/GoHomeButton";
import ContentsLayout from "./ContentsLayout";
import ExploreCard from "./explore/ExploreCard";
import RegisterCard from "./explore/SearchListCard";

const Register = () => {
  const navigate = useNavigate();
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

  // https://intrepidgeeks.com/tutorial/react-easily-import-youtube-videos-react-player

  return (
    <>
      <div>
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
        <div className={styles.contentsDiv}>
          <ContentsLayout>
            {data.map((data, index) => {
              return <RegisterCard key={`explore-card-${index}`} data={data} />;
            })}
          </ContentsLayout>
        </div>
      </div>
    </>
  );
};
export default Register;
