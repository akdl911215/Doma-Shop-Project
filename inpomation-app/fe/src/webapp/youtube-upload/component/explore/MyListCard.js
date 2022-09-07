import styles from "../../style/explore/MyListCard.module.css";

const MyListCard = ({ data }) => {
  const videoId = data?.video_id;

  return (
    <>
      <a href={`https://www.youtube.com/watch?v=${videoId}`}>
        <div className={styles.card}>
          <img
            className={styles.thumbnail}
            src={data.thumbnail}
            alt={`${data.tile}의 썸네일`}
          />
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
    </>
  );
};
export default MyListCard;
