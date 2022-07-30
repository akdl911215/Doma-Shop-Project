const db = require("../api/middlewares/pool");
const crypto = require("crypto");

exports.userSignin = async (req, res) => {
  return new Promise((resolve, reject) => {
    try {
      crypto.randomBytes(64, (err, buf) => {
        console.log("로그인 시작 : ");

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
