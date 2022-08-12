const db = require("../api/middlewares/pool");
const crypto = require("crypto");

exports.userCount = async (req, res, next) => {
  const sql = `SELECT COUNT(*) FROM users`;
  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, rows) => {
          resolve(rows[0]);
        });
        connection.release();
      });
    } catch (err) {
      console.error("userCount catch error : ", err);
      throw err;
    }
  });
};

exports.userList = async (req, res, next) => {
  const paging = req;
  console.log("user list paging : ", paging);
  const sql = `SELECT * FROM users LIMIT ${req?.page}, ${req?.pageSize}`;

  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, rows) => {
          if (rows) {
            resolve({
              message: "페이지 조회가 완료되었습니다.",
              code: 200,
              result: rows[0],
            });
          }

          if (err) {
            resolve({
              message: "페이지 조회가 실패하였습니다.",
              result: err,
            });
          }
        });
      });
      connection.release();
    } catch (err) {
      console.error("userList db connection catch error : ", err);
      throw err;
    }
  });
};

exports.userModify = async (req, res, next) => {
  const { id, name, email, phone_number, address } = req;

  const sql = `UPDATE users SET name = '${name}', email = '${email}', phone_number = '${phone_number}', address = '${address}' WHERE id = ${id};`;
  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, rows) => {
          resolve({
            message: "회원 정보 수정이 완료되었습니다.",
          });
        });
        connection.release();
      });
    } catch (err) {
      console.error("update 쿼리 error : ", err);
      resolve({
        message: "회원 정보 수정이 실패되었습니다.",
      });
    }
  });
};

exports.userInquiry = async (req, res, next) => {
  const username = req;
  const sql = `SELECT * FROM users WHERE username = '${username}'`;

  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, rows) => {
          resolve(rows[0]);
        });
        connection.release();
      });
    } catch (err) {
      console.error("userInquiry promise error : ", err);
    }
  });
};

exports.userSignin = async (req, res) => {
  return new Promise((resolve, reject) => {
    try {
      crypto.randomBytes(64, (err, buf) => {
        const { username, password } = req;
        const usernameSql = `SELECT * FROM users WHERE username = '${username}'`;
        db.getConnectionPool((connection) => {
          connection.query(usernameSql, (err, rows) => {
            console.log(`connection : ${connection}`);
            try {
              crypto.pbkdf2(
                password,
                rows[0]?.salt,
                100000,
                64,
                "sha512",
                async (err, key) => {
                  const hashedPassword = key.toString("base64");
                  if (rows.length) {
                    if (rows[0].username === username) {
                      if (rows[0].password === hashedPassword) {
                        const passwordSql = `SELECT * FROM users WHERE password = '${hashedPassword}'`;
                        connection.query(passwordSql, async (err, rows) => {
                          if (err) {
                            console.error(`username error : ${err}`);
                            throw err;
                          }

                          resolve({
                            message: "로그인 성공",
                            username,
                            password: hashedPassword,
                            roles: rows[0]?.roles,
                          });
                        });
                      } else {
                        resolve({
                          message: "비밀번호 틀렸습니다.",
                        });
                      }
                    }
                  } else {
                    // 아이디 틀렸을경우
                    resolve({
                      message: "아이디가 틀렸습니다.",
                    });
                  }
                }
              );
            } catch (error) {
              console.error(`rows error : ${error}`);
            }
          });
          connection.release();
        });
      });
    } catch (err) {
      console.error(`signin error : ${err}`);
    }
  }).catch((reject) => console.error(`userSignin reject error : ${reject}`));
};

exports.userRegister = (req, res) => {
  try {
    db.getConnectionPool((conn) => {
      const sql = `INSERT INTO users(username, password, name, email, phone_number, address, roles, salt)
                          VALUES ('${req?.username}','${req?.password}','${req?.name}','${req?.email}','${req?.phone_number}','${req?.address}', '${req?.roles}', '${req?.salt}')`;
      conn.query(sql, (err, doc) => {
        if (err) console.log(`conn.query err : ${err}`);
      });
      conn.release();
    });

    return req;
  } catch (err) {
    console.error(`db connectionPool error : ${err}`);
  }
};
