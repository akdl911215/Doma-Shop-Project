import Layout from "../component/Layout";
import ContentsLayout from "../component/ContentsLayout";
import youtubeData from "../data/youtubeData.json";
import ExploreCard from "../component/explore/ExploreCard";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import GoHomeButton from "webapp/common/component/GoHomeButton";
import { useEffect, useState } from "react";
import {
  YoutubeListDataAPI,
  YoutubeUploadListDataAPI,
} from "webapp/api/youubeApi";
import styles from "../style/Explore.module.css";

const Explore = () => {
  const navigate = useNavigate();
  const [video, setVideo] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    YoutubeListDataAPI()
      .then((res) => setVideo(res?.data?.list))
      .catch((err) => console.error("full list api error : ", err));
  }, []);

  const searchList = () => {
    YoutubeUploadListDataAPI({ q: search })
      .then((res) => {
        const arr = [];
        for (let i = 0; i < res?.data?.list.length; ++i) {
          const state = {
            id: res?.data?.list[i]?.id?.videoId,
            channelId: res?.data?.list[i]?.items?.items[0]?.snippet?.channelId,
            title: res?.data?.list[i]?.items?.items[0]?.snippet?.title,
            thumbnail:
              res?.data?.list[i]?.items?.items[0]?.snippet?.thumbnails?.high
                ?.url,
            description:
              res?.data?.list[i]?.items?.items[0]?.snippet?.description,
            channelTitle:
              res?.data?.list[i]?.items?.items[0]?.snippet?.channelTitle,
            viewCount:
              res?.data?.list[i]?.items?.items[0]?.statistics?.viewCount,
            likeCount:
              res?.data?.list[i]?.items?.items[0]?.statistics?.likeCount,
            channelUrl: "",
            channelThumbnail:
              res?.data?.list[i]?.snippet?.thumbnails?.high?.url,
            date: res?.data?.list[i]?.snippet?.publishedAt,
          };
          arr.push(state);
        }
        console.log("arr : ", arr);
        setVideo(arr);
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
      <GoHomeButton />
      <Button onClick={() => navigate("/youtube_register")}>글 쓰기</Button>
      <ContentsLayout>
        {video?.map((data, index) => {
          return <ExploreCard key={`explore-card-${index}`} data={data} />;
        })}
      </ContentsLayout>
    </>
  );
};
export default Explore;
