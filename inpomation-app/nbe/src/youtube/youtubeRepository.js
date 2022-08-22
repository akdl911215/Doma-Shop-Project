const request = require("request");
const parseString = require("xml2js").parseString;
require("dotenv").config();

exports.searchList = (req, res) => {
  console.log("유튜브 리스트 검색");

  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  console.log("YOUTUBE_API_KEY : ", YOUTUBE_API_KEY);

  // q : 검색어, order : 정렬방식 , maxResults : 최대 호출 개수 0이상~50이하 기본값 > 5
  const { q, order, maxResults } = req?.body;
};
