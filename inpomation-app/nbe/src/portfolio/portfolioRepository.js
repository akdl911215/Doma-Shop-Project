const db = require("../api/middlewares/pool");

exports.portfolioAsset = async (req, res, next) => {
  const user = req;
  console.log("user : ", user);

  return new Promise((resolve, reject) => {
    try {
      const sql = `INSERT INTO personal_stock(user_id, stock, buy_price, dividend) VALUES ('${req?.id}', '${req?.stock}', '${req?.buyPrice}', '${req?.dividend}')
                    ON DUPLICATE KEY UPDATE stock = '${req?.stock}', buy_price = '${req?.buyPrice}', dividend = '${req?.dividend}'`;
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, doc) => {
          if (err) {
            console.error("connection query portfolioAsset error : ", err);
            resolve({
              message: "자산 조회에 실패하였습니다.",
              ...err,
            });
          }

          if (doc) {
            console.log("connection query portfolioAsset : ", doc);
            resolve({
              message: "자산 조회에 성공하였습니다.",
              ...doc,
            });
          }
        });
      });
    } catch (err) {
      console.error("portfolioAsset db coonection catch error: ", err);
    }
  });
};

exports.portfolioInquiry = async (req, res, next) => {
  const userID = req;
  console.log("userID :: ", userID);

  return new Promise((resolve, reject) => {
    try {
      const sql = `SELECT * FROM portfolio WHERE user_id = ${userID}`;
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, doc) => {
          if (err) {
            console.error("connection query portfolioInquiry error : ", err);
            resolve({
              message: "포트폴리오 조회에 실패하였습니다.",
              ...err,
            });
          }

          if (doc) {
            console.log("connection query portfolioInquiry : ", doc);

            resolve({
              message: "포트폴리오 조회에 성공하였습니다.",
              ...doc,
            });
          }
        });
      });
    } catch (err) {
      console.error("portfolioInquiry db coonection catch error: ", err);
    }
  });
};

exports.portfolioCashAsset = async (req, res, next) => {
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
              cash: req?.cash,
              asset: req?.asset,
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
