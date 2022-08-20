import styles from "../style/Home.module.css";
import youtubeData from "../data/youtubeData.json";
import HomeFilter from "../component/home/HomeFilter";
import HomeCard from "../component/home/HomeCard";
import { useState } from "react";
const target = ["홈", "전체"];
// const target = ["전체", "투자", "방법", "시황"];
const Home = () => {
  const [filter, setFilter] = useState("홈");

  const mapFunc = (data, index) => {
    return (
      <HomeFilter
        filter={filter}
        text={data}
        onClickFilter={() => setFilter(data)}
        key={`home-filter-${index}`}
      />
    );
  };

  const filterFunc = (data) => {
    if (filter === "홈" || data.category === filter) return true;
    return false;
  };

  return (
    <div className={styles.rootDiv}>
      <div className={styles.header}>{target.map(mapFunc)}</div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {youtubeData["data"].filter(filterFunc).map(HomeCard)}
        </div>
      </div>
    </div>
  );
};
export default Home;
