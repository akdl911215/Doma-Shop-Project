const db = require("../api/middlewares/pool");
const date = require("../common/date");
const currentDate = date.date();
const currentDate2 = date.today();

exports.list = async (rqe, res, next) => {
  const sql = `SELECT * FROM investing_board`;

  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, doc) => {
          if (err) {
            console.error("connection error : ", err);
            resolve({
              message: "투자 리스트 조회 실패",
              error: err,
            });
          }

          if (doc) {
            console.log("connection result : ", doc);
            resolve({
              code: 200,
              message: "투자 리스트 조회 성공",
              list: doc,
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("register promise error : ", err);
    }
  });
};

exports.register = async (req, res, next) => {
  const { userId, writer, title, content } = req;
  const sql = `INSERT INTO investing_board (user_id, writer, title, content, regdate) VALUES (${userId}, '${writer}', '${title}', '${content}', '${currentDate2}')`;
  console.log("sql : ", sql);

  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, doc) => {
          if (err) {
            console.error("connection error : ", err);
            resolve({
              message: "투자 게시판 업로드 실패",
              error: err,
            });
          }

          if (doc) {
            console.log("connection result : ", doc);
            resolve({
              code: 200,
              message: "투자 게시판 업로드 성공",
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("register promise error : ", err);
    }
  });
};
