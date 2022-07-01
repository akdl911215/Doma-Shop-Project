const request = require("request");
const parseString = require("xml2js").parseString;
require("dotenv").config();


exports.smokingAreaInGwangjinGu = (req, res) => {
    console.log("광진구 흡연구역 데이터");

    const ENCODE_SERVICE_KEY = process.env.PUBLIC_DATA_ENCODE;
    const DECODE_SERVICE_KEY = process.env.PUBLIC_DATA_DECODE;
    const ID = encodeURI(req.query.id); // 흡연구역 아이디
    const PAGE_NO = req.query.pageNo; // 페이지 번호
    const NUM_OF_ROWS = req.query.numOfRows; // 한 페이지 결과 수
    const url = `http://apis.data.go.kr/3040000/smokingService/getSmkAreaList?type=xml&id=${ID}&serviceKey=${encodeURI(DECODE_SERVICE_KEY)}&pageNo=${PAGE_NO}&numOfRows=${NUM_OF_ROWS}`;

    request(url, (err, response, body) => {
        if(err) {
            console.error(`smoking error : ${err}`);
            throw err;
        }
        parseString(body, (err, result) => {
            if (err) {
                console.error(`somking parseString error : ${err}`);
                throw err;
            }
            res.json({
                result: {
                            area_ar: result.response.body[0].item[0].item[0].area_ar[0],
                            area_se: result.response.body[0].item[0].item[0].area_se[0],
                            latitude: result.response.body[0].item[0].item[0].latitude[0],
                            lnmadr: result.response.body[0].item[0].item[0].lnmadr[0],
                            ctprvnnm: result.response.body[0].item[0].item[0].ctprvnnm[0],
                            ref_date: result.response.body[0].item[0].item[0].ref_date[0],
                            area_nm: result.response.body[0].item[0].item[0].area_nm[0],
                            rdnmadr: result.response.body[0].item[0].item[0].rdnmadr[0],
                            inst_nm: result.response.body[0].item[0].item[0].inst_nm[0],
                            fclty_knd: result.response.body[0].item[0].item[0].fclty_knd[0],
                            emdnm: result.response.body[0].item[0].item[0].emdnm[0],
                            area_desc: result.response.body[0].item[0].item[0].area_desc[0],
                            id: result.response.body[0].item[0].item[0].id[0],
                            signgunm: result.response.body[0].item[0].item[0].signgunm[0],
                            longitude: result.response.body[0].item[0].item[0].longitude[0],
                        }
            })
        })
    })
}