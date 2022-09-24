const db = require("../api/middlewares/pool");

exports.register = async (req, res, next) => {
  console.log("req : ", req);
  const { userId, writer, title, content } = req;
  const sql = `INSERT INTO invesing_board(user_id, writer, title, content)
                VALUES ('${userId}', '${writer}', ${title}, '${content}')`;
  console.log("sql : ", sql);
  return new Promise((resolve, reject) => {
    try {
      //
    } catch (err) {
      console.error("register promise error : ", err);
    }
  });
};
