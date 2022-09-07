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

const MyList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("username") === null) {
      const signin = window.confirm(
        "로그인이 필요한 기능입니다. 로그인을 진행하시겠습니까?"
      );

      if (signin) navigate("/users_signin");
      else navigate("/youtube_explore");
    }

    YoutubeMyListDataAPI()
      .then((res) => dispatch(YoutubeSearchList(res?.data)))
      .catch((err) => console.error("my list api error : ", err));
  }, []);

  const { searchList } = useSelector(({ YoutubeReducer }) => ({
    searchList: YoutubeReducer?.YoutubeSearchListInitial,
  }));
  console.log("MyList searchList?.myList : ", searchList?.myList);
  console.log("MyList searchList?.code : ", searchList?.code);
  console.log("MyList searchList?.error : ", searchList?.error);
  console.log("MyList searchList?.message : ", searchList?.message);

  return (
    <>
      <div>
        <div>
          <SearchBar />
        </div>

        <div className={styles.contentsDiv}>
          <Menu />
          <ContentsLayout>
            {searchList?.myList?.length === 0
              ? null
              : searchList?.myList?.map((data, index) => {
                  return (
                    <MyListCard key={`explore-card-${index}`} data={data} />
                  );
                })}
          </ContentsLayout>
        </div>
      </div>
    </>
  );
};
export default MyList;
