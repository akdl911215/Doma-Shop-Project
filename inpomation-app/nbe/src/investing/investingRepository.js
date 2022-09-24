const db = require("../api/middlewares/pool");

exports.register = async (req, res, next) => {
  console.log("req : ", req);
  const { userId, writer, title, content } = req;
  const sql = `INSERT INTO investing_board (user_id, writer, title, content) VALUES (${userId}, '${writer}', '${title}', '${content}')`;
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
