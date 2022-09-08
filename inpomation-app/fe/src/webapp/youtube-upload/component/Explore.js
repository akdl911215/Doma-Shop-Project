// import Layout from "../component/Layout";
import ContentsLayout from "../component/ContentsLayout";
import ExploreCard from "../component/explore/ExploreCard";
import { useEffect, useState } from "react";
import { YoutubeListDataAPI } from "webapp/api/youtubeApi";
import styles from "../style/Explore.module.css";
import SearchBar from "./searchBar/SearchBar";
import Menu from "./Menu";
import { useDispatch, useSelector } from "react-redux";
import { YoutubeSearchList } from "webapp/reducers/youtube.reducer";

const Explore = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    sessionStorage.setItem("currentPage", "Explore");

    dispatch(YoutubeSearchList([]));
    YoutubeListDataAPI()
      .then((res) => dispatch(YoutubeSearchList(res?.data?.list)))
      .catch((err) => console.error("full list api error : ", err));
  }, []);

  const { searchList } = useSelector(({ YoutubeReducer }) => ({
    searchList: YoutubeReducer?.YoutubeSearchListInitial,
  }));

  return (
    <>
      <div>
        <SearchBar />
      </div>

      <div className={styles.contentsDiv}>
        <Menu />
        <ContentsLayout>
          {searchList?.map((data, index) => {
            return <ExploreCard key={`explore-card-${index}`} data={data} />;
          })}
        </ContentsLayout>
      </div>
    </>
  );
};
export default Explore;
