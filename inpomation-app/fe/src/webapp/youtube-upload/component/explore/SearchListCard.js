import styles from "../../style/explore/SearchListCard.module.css";
import moment from "moment";
import "moment/locale/ko";
import { ProcessViewCount } from "../../util";
import { YoutubeUploadDataAPI } from "webapp/api/youubeApi";
import { UserAuthDataAPI } from "webapp/api/userApi";
import { useNavigate } from "react-router-dom";

const SearchListCard = ({ data }) => {
  const navigate = useNavigate();
  console.log("SearchListCard data : ", data);
  const videoUrl = `https://www.youtube.com/watch?v=${data.id}`;

  const videoRegister = (video = {}) => {
    if (video === {}) {
      video = {
        url: "",
        title: "영상이 정상적으로 선택되지 않았습니다.",
      };
    }

    const upload = window.confirm(
      `[ ${video.title} ] 영상을 홈페이지에 업로드 하시겠습니까?`
    );

    if (upload) {
      console.log("upload video : ", video);

      UserAuthDataAPI().then((res) => {
        if (res?.data?.code === 200) {
          YoutubeUploadDataAPI(video)
            .then((res) => {
              if (res?.data?.result?.error?.code === "ER_DUP_ENTRY")
                alert("업로드 되어있는 영상입니다.");
              else alert(res?.data?.result?.message);
            })
            .catch((err) =>
              console.error("youtube upload catch error : ", err)
            );
        } else {
          const login = window.confirm(
            "로그인 후 이용이 가능합니다. 로그인 하시겠습니까?"
          );

          if (login) navigate("/users_signin");
        }
      });
    }
  };

  return (
    <>
      <div className={styles.continer}>
        <a href={videoUrl}>
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
                <div className={styles.view}>
                  {ProcessViewCount(data.viewCount)}
                </div>
                {/* <div className={styles.time}>{moment(data.date).fromNow()}</div> */}
              </div>
              <div className={styles.desc}>{data.description}</div>
            </div>
          </div>
        </a>
        <button
          onClick={() =>
            videoRegister({
              ...data,
              url: videoUrl,
              username: sessionStorage.getItem("username"),
            })
          }
        >
          영상 업로드
        </button>
      </div>
    </>
  );
};
export default SearchListCard;
