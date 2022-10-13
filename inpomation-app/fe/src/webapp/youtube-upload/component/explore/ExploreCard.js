import styles from "../../style/explore/ExploreCard.module.css";
import moment from "moment";
import "moment/locale/ko";
import { ProcessViewCount } from "../../util";
import { YoutubeLikeClickDataAPI } from "webapp/api/youtubeApi";
import { UserAuthDataAPI } from "webapp/api/userApi";
import { SessionRemove } from "webapp/common/component/SessionRemove";
import { useNavigate } from "react-router-dom";

const ExploreCard = ({ data }) => {
  const videoId = data?.video_id;
  const navigate = useNavigate();

  const likeClick = () => {
    alert("좋아용");

    UserAuthDataAPI().then((res) => {
      if (res?.data?.code === 200) {
        YoutubeLikeClickDataAPI({
          username: sessionStorage.getItem("username"),
          youtubeVideoId: videoId,
        })
          .then((res) => {
            if (res?.data?.code === 200) {
              alert("좋아요 추가");
            } else {
              alert("좋아요 실패");
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
      <div>
        <button onClick={likeClick}>좋아요</button>
        {/* <button>싫어요</button> */}
      </div>
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
    </>
  );
};
export default ExploreCard;
