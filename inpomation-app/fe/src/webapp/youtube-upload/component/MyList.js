import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { YoutubeMyListDataAPI } from "webapp/api/youtubeApi";
import { YoutubeSearchList } from "webapp/reducers/youtube.reducer";

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
  console.log("MyList searchList : ", searchList);

  return (
    <>
      <div>반갑구</div>
    </>
  );
};
export default MyList;
