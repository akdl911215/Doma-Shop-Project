import styles from "../style/Home.module.css";
import HomeCard from "./home/HomeCard";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { YoutubeListDataAPI } from "webapp/api/youtubeApi";
const Home = () => {
  const navigate = useNavigate();

  const [video, setVideo] = useState([]);
  useEffect(() => {
    YoutubeListDataAPI("main")
      .then((res) => setVideo(res?.data?.list))
      .catch((err) => console.error("main list api error : ", err));
  }, []);

  return (
    <div className={styles.rootDiv}>
      <Button disabled={true}>최신 업로드 TOP 3</Button>
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
export default Home;
