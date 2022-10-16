import styles from "../style/Home.module.css";
import HomeCard from "./home/HomeCard";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  YoutubeLikeScoreUpdateDataAPI,
  YoutubeListDataAPI,
} from "webapp/api/youtubeApi";
const LikeTopThreeHome = () => {
  const navigate = useNavigate();

  const [video, setVideo] = useState([]);
  useEffect(() => {
    YoutubeListDataAPI("likeTopThreeMain")
      .then((res) => setVideo(res?.data?.list))
      .catch((err) => console.error("main list api error : ", err));
  }, []);

  return (
    <div className={styles.rootDiv}>
      <Button disabled={true}>인기 TOP 3</Button>
      <Button
        className={styles.allListBtn}
        onClick={() => navigate("/youtube_explore")}
      >
        전체 영상 보러가기
      </Button>
      <div className={styles.container}>
        <div className={styles.grid}>{video?.map(HomeCard)}</div>
      </div>
    </div>
  );
};
export default LikeTopThreeHome;
