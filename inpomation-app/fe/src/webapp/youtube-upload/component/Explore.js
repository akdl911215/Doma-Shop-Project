// import Layout from "../component/Layout";
import ContentsLayout from "../component/ContentsLayout";
import ExploreCard from "../component/explore/ExploreCard";
import { useEffect, useState } from "react";
import {
  UserLikeInquiryDataAPI,
  YoutubeListDataAPI,
} from "webapp/api/youtubeApi";
import styles from "../style/Explore.module.css";
import SearchBar from "./searchBar/SearchBar";
import Menu from "./Menu";
import { useDispatch, useSelector } from "react-redux";
import { YoutubeSearchList } from "webapp/reducers/youtube.reducer";

const Explore = () => {
  const dispatch = useDispatch();
  const [viewArr, setViewArr] = useState([]);
  useEffect(() => {
    sessionStorage.setItem("currentPage", "Explore");

    dispatch(YoutubeSearchList([]));
    YoutubeListDataAPI()
      .then((res) => {
        console.log("res?.data?.list  : ", res?.data?.list);
        const youtubeList = res?.data?.list;

        UserLikeInquiryDataAPI({
          username: sessionStorage.getItem("username"),
        })
          .then((res) => {
            console.log("user like inquiry res : ", res);

            let list = [];
            if (res?.data?.code === 200) {
              list = youtubeList?.map((el, key) => {
                if (res?.data?.success[key]?.youtube_video_id === el.video_id) {
                  el.likeBool = true;
                } else {
                  el.likeBool = false;
                }

                return el;
              });
            } else {
              list = youtubeList;
            }

            dispatch(YoutubeSearchList(list));
          })
          .catch((err) => console.error("user like inquiry error : ", err));
      })
      .catch((err) => console.error("full list api error : ", err));
  }, []);

  const { searchList } = useSelector(({ YoutubeReducer }) => ({
    searchList: YoutubeReducer?.YoutubeSearchListInitial,
  }));
  console.log("expore searchList : ", searchList);

  //searchList - video_id 와 user like inquiry youtube_video_id 같으면 true 아님 false

  return (
    <>
      <div>
        <SearchBar />
      </div>

      <div className={styles.contentsDiv}>
        <Menu />
        <ContentsLayout>
          {/* {viewArr?.map((data, index) => { */}
          {searchList?.map((data, index) => {
            return <ExploreCard key={`explore-card-${index}`} data={data} />;
          })}
        </ContentsLayout>
      </div>
    </>
  );
};
export default Explore;
