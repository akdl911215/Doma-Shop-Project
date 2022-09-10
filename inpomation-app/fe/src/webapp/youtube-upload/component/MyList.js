import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { YoutubeMyListDataAPI } from "webapp/api/youtubeApi";
import { YoutubeSearchList } from "webapp/reducers/youtube.reducer";
import SearchBar from "./searchBar/SearchBar";
import styles from "../style/MyList.module.css";
import Menu from "./Menu";
import ContentsLayout from "./ContentsLayout";
// import ExploreCard from "./explore/ExploreCard";
import MyListCard from "./explore/MyListCard";
import { UserAuthDataAPI } from "webapp/api/userApi";
import { SessionRemove } from "webapp/common/component/SessionRemove";

const MyList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    UserAuthDataAPI()
      .then((res) => {
        if (res?.data?.code === 200) {
          YoutubeMyListDataAPI()
            .then((res) => dispatch(YoutubeSearchList(res?.data?.myList)))
            .catch((err) => console.error("my list api error : ", err));
        } else {
          const signin = window.confirm(
            "로그인이 필요한 기능입니다. 로그인을 진행하시겠습니까?"
          );

          if (signin) {
            SessionRemove();
            navigate("/users_signin");
            sessionStorage.setItem("signinPage", "/youtube_mylist");
          } else navigate("/youtube_explore");
        }
      })
      .catch((err) => console.error("youtube myList auth error : ", err));
  }, []);

  const { searchList } = useSelector(({ YoutubeReducer }) => ({
    searchList: YoutubeReducer?.YoutubeSearchListInitial,
  }));

  return (
    <>
      <div>
        <div>
          <SearchBar />
        </div>

        <div className={styles.contentsDiv}>
          <Menu />
          <ContentsLayout>
            {searchList?.length === 0 ? (
              <div className={styles.videoLengZero}>
                {/* <div className={styles.loder}>
                  내 동영상이 존재하지 않습니다.
                </div> */}
              </div>
            ) : (
              searchList?.map((data, index) => {
                return <MyListCard key={`explore-card-${index}`} data={data} />;
              })
            )}
          </ContentsLayout>
        </div>
      </div>
    </>
  );
};
export default MyList;
