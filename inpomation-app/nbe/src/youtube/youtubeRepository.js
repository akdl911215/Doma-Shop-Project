const request = require("request");
require("dotenv").config();
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const db = require("../api/middlewares/pool");
const date = require("../common/date");
const currentDate = date.today();

exports.userLikeInquiry = async (req, res, next) => {
  const { userId } = req;
  const sql = `SELECT * FROM youtube_like WHERE user_id = ${userId}`;

  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, rows) => {
          if (rows) {
            console.log("user youtube like inquiry success : ", rows);
            resolve({
              message: "회원기준 좋아요 조회 성공하였습니다.",
              code: 200,
              success: rows,
            });
          }

          if (err) {
            console.error("user youtube like inquiry error : ", err);
            resolve({
              message: "회원기준 좋아요 조회 실패하였습니다.",
              failed: err,
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error(
        "user youtube like inquiry db connection catch error : ",
        err
      );
      throw err;
    }
  });
};

exports.updateLikeScore = async (req, res, next) => {
  const { score, videoId } = req;

  const sql = `UPDATE youtube SET score = ${score} WHERE video_id = '${videoId}'`;
  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, rows) => {
          if (rows) {
            console.log("youtube like score  success : ", rows);
            resolve({
              message: "youtube like score success.",
              code: 200,
              success: rows,
            });
          }

          if (err) {
            console.error("youtube like score error : ", err);
            resolve({
              message: "youtube like score fail.",
              failed: err,
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("youtube like score db connection catch error : ", err);
      throw err;
    }
  });
};

exports.like = async (req, res, next) => {
  const { userId, youtubeVideoId } = req;
  const sql = `INSERT INTO youtube_like (user_id, youtube_video_id, like_date) VALUES ('${userId}', '${youtubeVideoId}', '${currentDate}')`;

  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, rows) => {
          if (rows) {
            console.log("youtube like add success : ", rows);
            resolve({
              message: "좋아요 추가 성공하였습니다.",
              code: 200,
              success: rows,
            });
          }

          if (err) {
            console.error("youtube like add error : ", err);
            resolve({
              message: "좋아요 추가 실패하였습니다.",
              failed: err,
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("board modify db connection catch error : ", err);
      throw err;
    }
  });
};

exports.pagenationList = async (req, res, next) => {
  const sql = `SELECT id, title, video_id, username, channel_title FROM youtube ORDER BY id DESC LIMIT ${req?.start}, ${req?.pageSize}`;
  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, doc) => {
          if (doc) {
            resolve({
              message: "페이지 조회가 완료되었습니다.",
              code: 200,
              pagenationList: doc,
            });
          }

          if (err) {
            resolve({
              message: "페이지 조회가 실패하였습니다.",
              error: err,
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error(
        "youtube pagenation list db connection catch error : ",
        err
      );
      throw err;
    }
  });
};

exports.youtubeListCount = async (req, res, next) => {
  const sql = `SELECT COUNT(*) FROM youtube`;
  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, rows) => {
          resolve(rows[0]["COUNT(*)"]);
        });
        connection.release();
      });
    } catch (err) {
      console.error("youtube count catch error : ", err);
      throw err;
    }
  });
};

exports.adminSearch = async (req, res, next) => {
  let whereSql = "CONCAT(id, title, video_id, username, channel_title)";
  if (req?.type === "id") whereSql = "id";
  if (req?.type === "title") whereSql = "title";
  if (req?.type === "videoId") whereSql = "video_id";
  if (req?.type === "username") whereSql = "username";
  if (req?.type === "channelTitle") whereSql = "channel_title";

  const sql = `SELECT id, title, video_id, username, channel_title FROM youtube WHERE ${whereSql} REGEXP '${req?.keyword}'`;

  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, doc) => {
          if (err) {
            console.error("connection error : ", err);
            resolve({
              message: "유튜브 어드민 페이지 검색 실패",
              error: err,
            });
          }

          if (doc) {
            resolve({
              code: 200,
              message: "유튜브 어드민 페이지 검색 성공",
              search: doc,
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error(
        "youtube admin search video db connection catch error : ",
        err
      );
      throw err;
    }
  });
};

exports.delete = (req, res) => {
  const videoId = req;
  const sql = `DELETE FROM youtube WHERE id = ${videoId}`;

  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, doc) => {
          if (err) {
            console.error("connection error : ", err);
            resolve({
              message: "유튜브 동영상 삭제 실패",
              error: err,
            });
          }

          if (doc) {
            resolve({
              code: 200,
              message: "유튜브 동영상 삭제 성공",
              remove: doc,
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("youtube delete video db connection catch error : ", err);
      throw err;
    }
  });
};

exports.myList = (req, res) => {
  const userId = req;
  const sql = `SELECT * FROM youtube WHERE user_id = ${userId} ORDER BY id DESC`;

  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, doc) => {
          if (err) {
            console.error("connection error : ", err);
            resolve({
              message: "내 동영상 리스트 출력 에러",
              error: err,
            });
          }

          if (doc) {
            resolve({
              code: 200,
              message: "내 동영상 리스트 출력 성공",
              myList: doc,
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("myList db connection catch error : ", err);
      throw err;
    }
  });
};

exports.uploadList = (req, res) => {
  const titleArr = [...req?.q];
  const replaceTitle = titleArr.map((el) => el.replace("'", `''`)).join("%");
  const sql = `SELECT * FROM youtube WHERE title LIKE '%${replaceTitle}%'`;

  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, doc) => {
          if (err) {
            console.error("upload list error : ", err);
            resolve({
              message: "업로드 리스트 출력 에러",
              error: err,
            });
          }
          if (doc) {
            console.log("upload list success : ", doc);
            resolve({
              code: 200,
              message: "업로드 리스트 출력 성공",
              uploadList: doc,
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("uploadList db connection catch error : ", err);
      throw err;
    }
  });
};

exports.likeScore = async (req, res, next) => {
  const { videoId } = req;
  const sql = `SELECT * FROM youtube_like WHERE youtube_video_id = '${videoId}'`;

  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, doc) => {
          if (err) {
            console.error("like score error : ", err);
            resolve({
              message: "좋아요 조회 에러",
              error: err,
            });
          }
          if (doc) {
            // console.log("like score success : ", doc);
            resolve({
              code: 200,
              message: "좋아요 조회 성공",
              success: doc,
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("like score db connection catch error : ", err);
      throw err;
    }
  });
};

exports.list = (req, res) => {
  let sql = "";

  if (req?.viewPage === "main") {
    sql = `SELECT * FROM youtube ORDER BY id DESC LIMIT 0, 3`;
  } else if (req?.viewPage === "likeTopThreeMain") {
    sql = `SELECT * FROM youtube ORDER BY score DESC LIMIT 0, 3`;
  } else {
    sql = `SELECT * FROM youtube ORDER BY id desc`;
  }

  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, doc) => {
          if (err) {
            console.error("connection error : ", err);
            resolve({
              message: "전체 리스트 출력 에러",
              error: err,
            });
          }

          if (doc) {
            resolve({
              code: 200,
              message: "전체 리스트 출력 성공",
              list: doc,
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("list db connection catch error : ", err);
    }
  });
};

exports.upload = (req, res) => {
  const {
    userId,
    username,
    url,
    title,
    id: videoId,
    channelId,
    thumbnail,
    channelTitle,
    description,
  } = req;

  const titleArr = [...title];
  const replaceTitle = titleArr.map((el) => el.replace("'", `''`)).join("");

  const thumbnailArr = [...thumbnail];
  const replaceThumbnail = thumbnailArr
    .map((el) => el.replace("'", `''`))
    .join("");

  const descriptionArr = [...description];
  const replaceDesciption = descriptionArr
    .map((el) => el.replace("'", `''`))
    .join("");

  const sql = `INSERT INTO youtube(url, username, user_id, video_id, thumbnail, title, channel_title, channel_id, description) 
                VALUES ('${url}', '${username}', ${userId}, '${videoId}', '${replaceThumbnail}', '${replaceTitle}', '${channelTitle}', '${channelId}', '${replaceDesciption}')`;

  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, doc) => {
          if (err) {
            console.error("connection error : ", err);
            resolve({
              message: "유튜브 업로드 실패",
              error: err,
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
