const db = require("../api/middlewares/pool");
const date = require("../common/date");
// const currentDate = date.date();
const currentDate = date.today();

exports.modify = async (req, res, next) => {
  const { boardId } = req;
  const sql = `SELECT writer, title, content, regdate FROM investing_board WHERE id = ${boardId}`;

  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, rows) => {
          if (rows) {
            console.log("investing modify success : ", rows);
            resolve({
              message: "투자 게시판 정보 조회 완료되었습니다.",
              code: 200,
              success: rows,
            });
          }

          if (err) {
            console.error("investing modify error : ", err);
            resolve({
              message: "투자 게시판 정보 조회 실패하였습니다.",
              failed: err,
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("modify db connection catch error : ", err);
      throw err;
    }
  });
};

exports.viewCount = async (req, res, next) => {
  const { boardId } = req;
  const sql = `UPDATE investing_board SET veiw_count = veiw_count + 1 WHERE id = ${boardId}`;

  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, rows) => {
          if (rows) {
            console.log("investing view count success : ", rows);
            resolve({
              message: "투자 페이지 조회수 증가가 완료되었습니다.",
              code: 200,
              success: rows,
            });
          }

          if (err) {
            console.error("investing current page error : ", err);
            resolve({
              message: "투자 페이지 조회수 증가가 실패하였습니다.",
              failed: err,
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("viewCount db connection catch error : ", err);
      throw err;
    }
  });
};

exports.investingBoardCount = async (req, res, next) => {
  const sql = `SELECT COUNT(*) FROM investing_board`;
  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, rows) => {
          resolve(rows[0]["COUNT(*)"]);
        });
        connection.release();
      });
    } catch (err) {
      console.error("investing board count catch error : ", err);
      throw err;
    }
  });
};

exports.investingPageList = async (req, res, next) => {
  const { start, pageSize } = req;
  const sql = `SELECT id, user_id, writer, title, content, regdate, veiw_count FROM investing_board ORDER BY id DESC LIMIT ${start}, ${pageSize}`;

  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, rows) => {
          if (rows) {
            // console.log("investing current page success : ", rows);
            resolve({
              message: "투자 페이지 조회가 완료되었습니다.",
              code: 200,
              investingPageList: rows,
            });
          }

          if (err) {
            console.error("investing current page error : ", err);
            resolve({
              message: "투자 페이지 조회가 실패하였습니다.",
              usersList: err,
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("userList db connection catch error : ", err);
      throw err;
    }
  });
};

exports.commentDelete = async (req, res, next) => {
  const { commentId } = req;
  const sql = `DELETE FROM investing_board_reply WHERE id = ${commentId}`;

  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, doc) => {
          if (err) {
            console.error("connection comment delete error : ", err);
            resolve({
              message: "투자 게시판 댓글 삭제 실패",
              error: err,
            });
          }

          if (doc) {
            console.log("connection comment delete result : ", doc);
            resolve({
              code: 200,
              message: "투자 게시판 댓글 삭제 성공",
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("comment delete promise error : ", err);
    }
  });
};

exports.delete = async (req, res, next) => {
  const { boardId } = req;
  const sql = `DELETE FROM investing_board WHERE id = ${boardId}`;

  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, doc) => {
          if (err) {
            console.error("connection delete error : ", err);
            resolve({
              message: "투자 게시판 삭제 실패",
              error: err,
            });
          }

          if (doc) {
            console.log("connection delete result : ", doc);
            resolve({
              code: 200,
              message: "투자 게시판 삭제 성공",
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("delete promise error : ", err);
    }
  });
};

exports.commentRead = async (req, res, next) => {
  const { boardId } = req;
  const sql = `SELECT id, writer, content, regdate FROM investing_board_reply WHERE board_id = ${boardId}`;

  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, doc) => {
          if (err) {
            console.error("connection comments error : ", err);
            resolve({
              message: "투자 게시판 댓글 리드 조회 실패",
              error: err,
            });
          }

          if (doc) {
            console.log("connection comments result : ", doc);
            resolve({
              code: 200,
              message: "투자 게시판 댓글 리드 조회 성공",
              commentsList: doc,
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("read promise error : ", err);
    }
  });
};

exports.commentRegister = async (req, res, next) => {
  const { boardId, username, comment } = req;
  const sql = `INSERT INTO investing_board_reply (board_id, writer, content, regdate) VALUES (${boardId}, '${username}', '${comment}', '${currentDate}')`;

  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, doc) => {
          if (err) {
            console.error("connection comment register error : ", err);
            resolve({
              message: "투자 게시판 댓글 등록 실패",
              error: err,
            });
          }

          if (doc) {
            console.log("connection comment register result : ", doc);
            resolve({
              code: 200,
              message: "투자 게시판 댓글 등록 성공",
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("read promise error : ", err);
    }
  });
};

exports.read = async (req, res, next) => {
  const { boardId } = req;
  const sql = `SELECT writer, title, content, regdate, veiw_count FROM investing_board WHERE id = ${boardId}`;

  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, doc) => {
          if (err) {
            console.error("connection board read error : ", err);
            resolve({
              message: "투자 게시판 리드 조회 실패",
              error: err,
            });
          }

          if (doc) {
            console.log("connection board read result : ", doc);
            resolve({
              code: 200,
              message: "투자 게시판 리드 조회 성공",
              success: doc,
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("read promise error : ", err);
    }
  });
};

exports.list = async (rqe, res, next) => {
  const sql = `SELECT * FROM investing_board`;

  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, doc) => {
          if (err) {
            console.error("connection investing list error : ", err);
            resolve({
              message: "투자 리스트 조회 실패",
              error: err,
            });
          }

          if (doc) {
            console.log("connection investing list result : ", doc);
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
  const sql = `INSERT INTO investing_board (user_id, writer, title, content, regdate) VALUES (${userId}, '${writer}', '${title}', '${content}', '${currentDate}')`;

  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, doc) => {
          if (err) {
            console.error("connection board register error : ", err);
            resolve({
              message: "투자 게시판 업로드 실패",
              error: err,
            });
          }

          if (doc) {
            console.log("connection board register result : ", doc);
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
