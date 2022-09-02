import styles from "../style/Home.module.css";
import youtubeData from "../data/TopSixYoutubeData.json";
import HomeCard from "../component/home/HomeCard";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { YoutubeListDataAPI } from "webapp/api/youubeApi";
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
      <Button
        className={styles.allListBtn}
        onClick={() => navigate("/youtube_explore")}
      >
        전체 영상 보러가기
      </Button>
      <div className={styles.container}>
        <input value="최근 올라온 영상 TOP3" readOnly />
        <div className={styles.grid}>{video?.map(HomeCard)}</div>
      </div>
    </div>
  );
};
export default Home;
