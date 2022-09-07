// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import styles from "../../style/home/HomeCard.module.css";
// // import "moment/locale/ko";
// // import moment from "moment";
// // import { ProcessViewCount } from "../../util";
// import { YoutubeBoard } from "webapp/reducers/youtube.reducer";

// const HomeCard = (data, index) => {
//   const dispath = useDispatch();

//   return (
//     <div>
//       <Link
//         // href={`https://www.youtube.com/watch?v=${videoId}`}
//         to="/youtube_board"
//         key={`home-card-${index}`}
//         className={styles.card}
//         onClick={() =>
//           dispath(
//             YoutubeBoard({
//               data: data,
//               index: index,
//             })
//           )
//         }
//       >
//         <img
//           className={styles.thumbnail}
//           src={data.thumbnail}
//           alt={`${data.title}의 썸네일`}
//         />
//         <div className={styles.info}>
//           {/* <a href={`https://www.youtub.com/channel/${data.channelId}`}>
//           <img
//             className={styles.channelImg}
//             src={data.channelThumbnail}
//             alt={`${data.channelTitle} 프로필 사진`}
//           />
//         </a> */}
//           <div>
//             <div className={styles.title}>{data.title}</div>
//             <div className={styles.uploader}>{data.channelTitle}</div>
//             {/* <div className={styles.flex}>
//             <div className={styles.view}>
//               {ProcessViewCount(data.viewCount)}
//             </div>
//             <div className={styles.view}>{moment(data.date).fromNow()}</div>
//           </div> */}
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };
// export default HomeCard;
