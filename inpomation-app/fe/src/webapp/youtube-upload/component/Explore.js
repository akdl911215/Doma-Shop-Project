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
import SearchBar from "./searchBar/SearchBar";

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
        if (res?.data?.code === 200) {
          setVideo(
            res?.data?.uploadList.map((el) => {
              return {
                id: el?.id,
                channelId: el?.channel_id,
                title: el?.title,
                thumbnail: el?.thumbnail,
                description: el?.description,
                channelTitle: el?.channel_title,
                viewCount: "",
                likeCount: "",
                channelUrl: "",
                channelThumbnail: "",
                username: el?.username,
                userId: el?.user_id,
                videoId: el?.video_id,
                url: el?.url,
              };
            })
          );
        }
      })
      .catch((err) =>
        console.error("YoutubeUploadListDataAPI catch error : ", err)
      );
  };

  return (
    <>
      <div>
        {/* <input
          placeholder="유튜브 제목을 검색하세요"
          className={styles.youtubeSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchList} className={styles.searchButton}>
          검색
        </button> */}
        <SearchBar />
      </div>
      <GoHomeButton />
      <Button onClick={() => navigate("/youtube_register")}>글 쓰기</Button>
      <div className={styles.contentsDiv}>
        <ContentsLayout>
          {video?.map((data, index) => {
            return <ExploreCard key={`explore-card-${index}`} data={data} />;
          })}
        </ContentsLayout>
      </div>
    </>
  );
};
export default Explore;
