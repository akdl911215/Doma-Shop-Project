const request = require("request");
const parseString = require("xml2js").parseString;
require("dotenv").config();

exports.cityAndProvince = (req, res) => {
  console.log("시도별 수출입실적 조회");

  const ENCODE_SERVICE_KEY = process.env.PUBLIC_DATA_ENCODE;
  const DECODE_SERVICE_KEY = process.env.PUBLIC_DATA_DECODE;

  // 시도코드 : 11 서울특별시, 26 부산광역시, 27 대구광역시, 28 인천광역시
  //            29 광주광역시, 30 대전광역시, 31 울산광역시, 36 세종특별자치시
  //            41 경기도, 42 강원도, 43 충청북도, 44 충청남도, 45 전라북도
  //            46 전라남도, 47 경상북도, 48 경상남도, 50 제주특별자치도
  const { sidoCode: sidoCd, startDate: strtYymm, endDate: endYymm } = req.body;

  const url = `http://apis.data.go.kr/1220000/sidotrade/getSidotradeList?serviceKey=${ENCODE_SERVICE_KEY}&strtYymm=${strtYymm}&endYymm=${endYymm}&sidoCd=${sidoCd}`;

  request({ uri: url, method: "GET" }, (err, response, body) => {
    console.log("request 진입: ", body);
    if (err) {
      console.log(`시도별 수출입실적 조회 ERROR : ${err}`);
      throw err;
    }
    try {
      parseString(body, (err, result) => {
        if (err) {
          console.error(`시도별 수출입실적 조회 parseSring error : ${err}`);
          res.json({
            result: {
              errorMsg: result,
            },
          });
          return;
        }

        res.json({
          result: {
            resultMsg: result.response.header[0].resultMsg[0],
            cmtrBlncAmt:
              result.response.body[0].items[0].item[0].cmtrBlncAmt[0], // cmtrBlncAmt : 무역지수
            expCnt: result.response.body[0].items[0].item[0].expCnt[0], // expCnt : 수출건수
            expUsdAmt: result.response.body[0].items[0].item[0].expUsdAmt[0], // expUsdAmt : 수출금액
            impCnt: result.response.body[0].items[0].item[0].impCnt[0], // impCnt : 수입건수
            impUsdAmt: result.response.body[0].items[0].item[0].impUsdAmt[0], // impUsdAmt : 수입금액
            priodTitle: result.response.body[0].items[0].item[0].priodTitle[0], // priodTitle : 기간
            cmtrBlncAmt2:
              result.response.body[0].items[0].item[1].cmtrBlncAmt[0], // cmtrBlncAmt : 무역지수
            expCnt2: result.response.body[0].items[0].item[1].expCnt[0], // expCnt : 수출건수
            expUsdAmt2: result.response.body[0].items[0].item[1].expUsdAmt[0], // expUsdAmt : 수출금액
            impCnt2: result.response.body[0].items[0].item[1].impCnt[0], // impCnt : 수입건수
            impUsdAmt2: result.response.body[0].items[0].item[1].impUsdAmt[0], // impUsdAmt : 수입금액
            priodTitle2: result.response.body[0].items[0].item[1].priodTitle[0], // priodTitle : 기간
            sidoNm2: result.response.body[0].items[0].item[1].sidoNm[0], // sidoNm : 광역시
          },
        });
      });
    } catch (err) {
      res.json({
        result: {
          resultMsg: result.response.header[0].resultMsg[0],
        },
      });
      console.error("request pasing error : ", err);
      throw new Error("request pasing error : ", err);
    }
  });
};

// 2000~2022년 테이블 생성 후
