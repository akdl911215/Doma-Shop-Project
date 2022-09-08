import { UserAuthDataAPI } from "webapp/api/userApi";
import { YoutubeDeleteDataAPI } from "webapp/api/youtubeApi";
import styles from "../../style/explore/MyListCard.module.css";

const MyListCard = ({ data }) => {
  const videoId = data?.video_id;

  const videoDeleteBtn = (video) => {
    const remove = window.confirm(
      `[ ${video?.title} ] 영상을 삭제시키겠습니까?`
    );
    if (remove) {
      UserAuthDataAPI().then((res) => {
        if (res?.data?.code === 200) {
          YoutubeDeleteDataAPI({
            id: video?.id,
          })
            .then((res) => {
              if (res) window.location.reload();
            })
            .catch((err) =>
              console.error("youtube video delete error : ", err)
            );
        }
      });
    }
  };

  return (
    <>
      <div className={styles.continer}>
        <a href={`https://www.youtube.com/watch?v=${videoId}`}>
          <div className={styles.card}>
            <img
              className={styles.thumbnail}
              src={data.thumbnail}
              alt={`${data.tile}의 썸네일`}
            />
            +
            <div className={styles.info}>
              <div className={styles.title}>{data.title}</div>
              <div className={styles.meta}>
                <a
                  href={`https://www.youtube.com/channel/${data.channelId}`}
                  className={styles.uploader}
                ></a>
                {data.channelTitle}
              </div>
              <div className={styles.desc}>{data.description}</div>
            </div>
          </div>
        </a>
        <button
          onClick={() => videoDeleteBtn(data)}
          className={styles.deleteBtn}
        >
          영상 삭제
        </button>
      </div>
    </>
  );
};
export default MyListCard;
