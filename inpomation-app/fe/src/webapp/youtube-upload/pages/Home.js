import styles from "../style/Home.module.css";
import youtubeData from "../data/TopSixYoutubeData.json";
import HomeCard from "../component/home/HomeCard";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.rootDiv}>
      <Button onClick={() => navigate("/youtube_explore")}>
        전체 영상 보러가기
      </Button>
      <div className={styles.container}>
        <div className={styles.grid}>{youtubeData["data"].map(HomeCard)}</div>
      </div>
    </div>
  );
};
export default Home;
