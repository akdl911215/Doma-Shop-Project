import styles from "../../style/explore/ExploreCard.module.css";
import moment from "moment";
import "moment/locale/ko";
import { ProcessViewCount } from "../../util";
import { YoutubeLikeClickDataAPI } from "webapp/api/youtubeApi";
import { UserAuthDataAPI } from "webapp/api/userApi";
import { SessionRemove } from "webapp/common/component/SessionRemove";
import { useNavigate } from "react-router-dom";
import likeOne from "../../../images/like1-1.png";
import likeTwo from "../../../images/like1-2.png";

const ExploreCard = ({ data }) => {
  const videoId = data?.video_id;
  const navigate = useNavigate();
  // likeBool === false(defalt) : 안누른 상태
  const likeClickBool = data?.likeBool;

  console.log("explore card likeClickBool :: ", likeClickBool);

  const unlikeClick = () => {
    //
  };

  const likeClick = (bool) => {
    console.log("likeClick bool : ", bool);
    let likeCheck = "like";
    if (bool) {
      likeCheck = "unlike";
    }
    UserAuthDataAPI().then((res) => {
      if (res?.data?.code === 200) {
        YoutubeLikeClickDataAPI({
          username: sessionStorage.getItem("username"),
          youtubeVideoId: videoId,
          like: likeCheck,
        })
          .then((res) => {
            console.log("res : ", res);
            if (res?.data?.code === 200) {
              window.location.reload();
            } else {
              alert("실패하였습니다.");
            }
          })
          .catch((err) => console.error("youtube like click error : ", err));
      } else {
        const result = window.confirm(
          "재로그인이 필요합니다. 로그인을 진행하시겠습니까?"
        );
        if (result) {
          SessionRemove();
          sessionStorage.setItem("signinPage", "/youtube_explore");
          navigate("/users_signin");
        }
      }
    });
  };

  return (
    <>
      <div className={styles.cardContainerBox}>
        <a href={`https://www.youtube.com/watch?v=${videoId}`}>
          <div className={styles.card}>
            <img
              className={styles.thumbnail}
              src={data.thumbnail}
              alt={`${data.title}의 썸네일`}
            />
            <div className={styles.info}>
              <div className={styles.title}>{data.title}</div>
              <div className={styles.meta}>
                <a
                  href={`https://www.youtube.com/channel/${data.channelId}`}
                  className={styles.uploader}
                >
                  {data.channelTitle}
                </a>
                {/* <div className={styles.view}>
              {ProcessViewCount(data.viewCount)}
            </div> */}
                {/* <div className={styles.time}>{moment(data.date).fromNow()}</div> */}
              </div>
              <div className={styles.desc}>{data.description}</div>
            </div>
          </div>
        </a>

        <button
          className={styles.likeBtn}
          // onClick={likeClickBool ? unlikeClick : likeClick}
          onClick={() => likeClick(likeClickBool)}
        >
          {likeClickBool ? (
            <img src={likeTwo} className={styles.likeImage} />
          ) : (
            <img src={likeOne} className={styles.likeImage} />
          )}
        </button>
      </div>
    </>
  );
};
export default ExploreCard;
