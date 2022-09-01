const request = require("request");
require("dotenv").config();
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const db = require("../api/middlewares/pool");

exports.upload = (req, res) => {
  // console.log("upload req : ", req);
  const {
    userId,
    username,
    url,
    title,
    id,
    channelId,
    thumbnail,
    channelTitle,
  } = req;

  //   userId: user?.id,
  // username: video?.username,
  // url: video?.url,
  //
  // id: 'ghg0fYxbefU',
  // channelId: 'UCWlV3Lz_55UaX4JsMj-z__Q',
  // title: '국힘 "결국은 투표로 단일화"…인명진 "安 완주는 정권연장"',
  // thumbnail: 'https://i.ytimg.com/vi/ghg0fYxbefU/hqdefault.jpg',
  // description:
  // channelTitle: '뉴스TVCHOSUN',
  // viewCount: '68328',
  // likeCount: '2025',
  // channelUrl: '',

  const arr = [...title];
  console.log("arr : ", arr);

  const arr2 = [];
  for (let i = 0; i < arr.length; ++i) {
    const text2 = arr[i];
    arr2.push(text2.replace("'", `''`));
  }
  console.log("arr2 : ", arr2);

  const replaceTitle = arr2.join("");
  console.log("replaceTitle : ", replaceTitle);

  const sql = `INSERT INTO youtube(url, username, user_id, video_id, thumbnail, title, channel_title, channel_id) 
                VALUES ('${url}', '${username}', ${userId}, '${id}', '${thumbnail}', '${replaceTitle}', '${channelTitle}', '${channelId}')`;
  // const sql =
  //   "INSERT INTO youtube(url, username, user_id, video_id, thumbnail, title, channel_title, channel_id) VALUES ('" +
  //   url +
  //   "', '" +
  //   username +
  //   "', '" +
  //   userId +
  //   "', '" +
  //   id +
  //   "', '" +
  //   thumbnail +
  //   "', '" +
  //   title +
  //   "', '" +
  //   channelTitle +
  //   "', '" +
  //   channelId +
  //   "')";
  console.log("sql :: ", sql);

  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, doc) => {
          if (err) {
            console.error("connection error : ", err);
            resolve({
              message: "유튜브 업로드 실패",
            });
          }

          if (doc) {
            resolve({
              code: 200,
              message: "유튜브 업로드 성공",
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("youtube upload db error : ", err);
    }
  });
};

exports.searchList = (req, res) => {
  // https://developers.google.com/youtube/v3/docs/search/list
  const { q } = req; // q : 검색
  const searchWord = encodeURI(q);
  const PART = "snippet"; // id or snippet
  const LISTCOUNT = "5"; // default: 5 , 0이상~50이하

  const ORDER = "relevance";
  // date – 리소스를 만든 날짜를 기준으로 최근 항목부터 시간 순서대로 리소스를 정렬합니다.
  // rating – 높은 평가부터 낮은 평가순으로 리소스를 정렬합니다.
  // relevance – 검색 쿼리에 대한 관련성을 기준으로 리소스를 정렬합니다. 이 매개변수의 기본값입니다.
  // title – 제목에 따라 문자순으로 리소스를 정렬합니다.
  // videoCount – 업로드한 동영상 수에 따라 채널을 내림차순으로 정렬합니다.
  // viewCount – 리소스를 조회수가 높은 항목부터 정렬합니다.

  const url = `https://www.googleapis.com/youtube/v3/search?part=${PART}&maxResults=${LISTCOUNT}&order=${ORDER}&q=${searchWord}&key=${YOUTUBE_API_KEY}`;

  return new Promise((resolve, reject) => {
    try {
      request({ uri: url, method: "GET" }, (err, response, body) => {
        if (err) {
          console.error("유튜브 검색 리스트 error : ", err);
          throw err;
        }

        const result = JSON.parse(body);

        resolve({
          kind: result.kind,
          etag: result.etag,
          nextPageToken: result.nextPageToken,
          regionCode: result.regionCode,
          pageInfo: result.pageInfo,
          items: result?.items?.filter((el) => el?.id?.videoId !== undefined),
        });
      });
    } catch (err) {
      console.error("request error : ", err);
      throw err;
    }
  });
};

exports.searchVideos = (req, res) => {
  return new Promise((resolve, reject) => {
    try {
      const PART = "snippet,contentDetails,statistics,status";
      // const PART =
      //   "snippet, contentDetails, fileDetails, player, processingDetails, recordingDetails, statistics, status, suggestions, topicDetails";

      const url = `https://www.googleapis.com/youtube/v3/videos?id=${req?.id}&key=${YOUTUBE_API_KEY}&part=${PART}`;
      request({ uri: url, method: "GET" }, (err, response, body) => {
        if (err) {
          console.error("유튜브 검색 리스트 url error : ", err);
          throw err;
        }
        resolve(body);
      });
    } catch (err) {
      console.error("search videos catch error : ", err);
    }
  });
};
