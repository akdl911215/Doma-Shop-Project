const request = require("request");
const parseString = require("xml2js").parseString;
require("dotenv").config();

exports.searchList = (req, res) => {
  console.log("유튜브 리스트 검색 : ", req);

  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  console.log("YOUTUBE_API_KEY : ", YOUTUBE_API_KEY);

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
  console.log(
    `searchWord : ${searchWord}, PART: ${PART}, LISTCOUNT: ${LISTCOUNT}, ORDER: ${ORDER}`
  );

  const url = `https://www.googleapis.com/youtube/v3/search?part=${PART}&maxResults=${LISTCOUNT}&order=${ORDER}&q=${searchWord}&key=${YOUTUBE_API_KEY}`;
  request({ uri: url, method: "GET" }, (err, response, body) => {
    console.log("youtube search list 진입 : ", body);
    if (err) {
      console.error("유튜브 검색 리스트 error : ", err);
      throw err;
    }

    try {
      // res.json({
      //   result: body,
      // });
      parseString(body, (err, result) => {
        if (err) {
          console.error(`youtube search list parseSTring error : `, err);
          res.json({
            result: err,
          });
          return;
        }

        console.log("body : ", body);

        res.json({
          result: result,
        });
      });
    } catch (err) {
      console.error("request pasing error : ", err);
      throw err;
    }
  });
};
