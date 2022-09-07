const db = require("../api/middlewares/pool");
const crypto = require("crypto");
require("dotenv").config();

exports.usersSearch = async (req, res, next) => {
  let whereSql = "CONCAT(username, email, NAME, phone_number, address)";
  if (req?.type === "u") whereSql = "username";
  if (req?.type === "e") whereSql = "email";
  if (req?.type === "n") whereSql = "name";
  if (req?.type === "p") whereSql = "phone_number";
  if (req?.type === "r") whereSql = "roles";
  const sql = `${process.env.SQL_USERS_SEARCH} ${whereSql} REGEXP '${req?.keyword}'`;
  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, rows) => {
          if (rows) {
            resolve(rows);
          }

          if (err) {
            resolve(err);
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("usersSearch catch error : ", err);
      throw err;
    }
  });
};

exports.userCount = async (req, res, next) => {
  const sql = `${process.env.SQL_USERS_COUNT}`;
  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, rows) => {
          resolve(rows[0]["COUNT(*)"]);
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
  const sql = `${process.env.SQL_USERS_LIST} ${req?.start}, ${req?.pageSize}`;
  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, rows) => {
          if (rows) {
            resolve({
              message: "페이지 조회가 완료되었습니다.",
              code: 200,
              usersList: rows,
            });
          }

          if (err) {
            resolve({
              message: "페이지 조회가 실패하였습니다.",
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

exports.userRemove = async (req, res, next) => {
  console.log("userRemove req : ", req);
  const sql = `${process.env.SQL_USERS_REMOVE} username = '""', password = '""', name = '""', email = '""', phone_number = '""', address = '""' ${process.env.SQL_USERS_REMOVE_TWO} = ${req};`;
  console.log("sql : ", sql);

  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, rows) => {
          console.log("rows : ", rows);
          if (rows) {
            resolve({
              message: "회원 삭제가 완료되었습니다.",
              code: 200,
              remove: rows,
            });
          }

          console.log("err : ", err);
          if (err) {
            resolve({
              message: "회원 삭제가 실패되었습니다.",
              remove: err,
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("remove query 실패하였습니다. ", err);
      throw err;
    }
  });
};

exports.userModify = async (req, res, next) => {
  const { id, name, email, phone_number, address } = req;

  const sql = `${process.env.SQL_USERS_MODIFY} name = '${name}', email = '${email}', phone_number = '${phone_number}', address = '${address}' WHERE id = ${id};`;
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
  const sql = `${process.env.SQL_USERS_INQUIRY} = '${username}'`;

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
        const usernameSql = `${process.env.SQL_SIGNIN_USERNAME} = '${username}'`;
        db.getConnectionPool((connection) => {
          connection.query(usernameSql, (err, rows) => {
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
                        const passwordSql = `${process.env.SQL_SIGNIN_PASSWORD} = '${hashedPassword}'`;

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
      const sql = `${process.env.SQL_SIGNUP} ('${req?.username}','${req?.password}','${req?.name}','${req?.email}','${req?.phone_number}','${req?.address}', '${req?.roles}', '${req?.salt}')`;

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
