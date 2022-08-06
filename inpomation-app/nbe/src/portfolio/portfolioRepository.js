const db = require("../api/middlewares/pool");

exports.portfolioCashAsset = async (req, res, next) => {
  const user = req;
  console.log("cash Asset repository user : ", user);

  return new Promise((resolve, reject) => {
    try {
      const sql = `INSERT INTO portfolio(user_id, cash, total_asset) VALUES ('${req?.id}', '${req?.cash}', '${req?.asset}')
                    ON DUPLICATE KEY UPDATE cash = '${req?.cash}', total_asset = '${req?.asset}'`;
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, doc) => {
          if (err) {
            console.error("connection query error : ", err);
            resolve({
              message: "현금 대 자산 비율 업데이트 실패하였습니다.",
              ...err,
            });
          }

          if (doc) {
            console.log("connection doc : ", doc);
            resolve({
              message: "현금 대 자산 비율 업데이트 완료하였습니다.",
              portfolioId: doc?.insertId,
              userId: req?.id,
              cash: `현금보유량 : ${req?.cash}`,
              asset: `자산보유량 : ${req?.asset}`,
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("db coonection catch error: ", err);
    }
  });
};
