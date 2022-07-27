const db = require("../api/middlewares/pool");
const crypto = require("crypto");
const jwt = require("../security/jwt");

exports.userLogout = (req, res) => {
  console.log("로그아웃");

  delete req.session.username;
  delete req.session.password;
  delete req.session.isLogined;
  req.session.save(() => res.redirect("/"));
};

exports.userSignin = async (req, res) => {
  crypto.randomBytes(64, (err, buf) => {
    console.log("로그인");

    const { username, password } = req.body;

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
              console.log(
                `username : ${username}, password : ${hashedPassword}`
              );

              if (rows.length) {
                if (rows[0].username === username) {
                  if (rows[0].password === hashedPassword) {
                    const passwordSql = `SELECT * FROM users WHERE password = '${hashedPassword}'`;
                    connection.query(passwordSql, async (err, rows) => {
                      if (err) {
                        console.error(`username error : ${err}`);
                        throw err;
                      }

                      if (rows.length) {
                        const jwtToken = await jwt.sign(username);
                        console.log("jwtToken : ", jwtToken);
                        res.set({
                          "content-type": "application/json; charset=utf-8",
                        });

                        res.status(200).json({
                          code: 200,
                          message: "토큰이 발급되었습니다.",
                          token: jwtToken.token,
                          result: "로그인 성공",
                        });
                      }
                    });
                  } else {
                    res.json({
                      result: "비밀번호 틀렸습니다.",
                    });
                  }
                }
              } else {
                // 아이디 틀렸을경우
                res.json({
                  result: "아이디가 틀렸습니다.",
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
};

exports.userRegister = (req, res) => {
  let registerReturn = {};
  crypto.randomBytes(64, (err, buf) => {
    if (err) {
      console.error(`crypto randomBytes error ${err}`);
      throw err;
    }

    console.log("userRegister req : ", req);
    const { username, password, name, email, phone_number, address, roles } =
      req;

    const salt = buf.toString("base64");

    crypto.pbkdf2(password, salt, 100000, 64, "sha512", async (err, key) => {
      if (err) {
        console.error(`cryto salt error ${err}`);
        throw err;
      }
      const hashedPassword = key.toString("base64");
      console.log("hashedPassword pbkdf2 : ", hashedPassword);

      if (hashedPassword === undefined || hashedPassword === "") {
        console.error(`비밀번호가 제대로 입력되지 않았습니다.`);
        throw err;
      }
      console.log("hashedPassword : ", hashedPassword);

      console.log(
        `username : ${username}, password : ${hashedPassword}, password2 : ${password}, name : ${name}, email : ${email}, phone_number : ${phone_number}, address : ${address}, roles : ${roles}`
      );

      db.getConnectionPool((conn) => {
        const sql = `INSERT INTO users(username, password, name, email, phone_number, address, roles, salt) 
                              VALUES ('${username}','${hashedPassword}','${name}','${email}','${phone_number}','${address}', '${roles}', '${salt}')`;
        conn.query(sql, (err, doc) => {
          if (err) console.log(`conn.query err : ${err}`);
          // res.send({
          //   message: "success",
          //   result: doc,
          // });
          registerReturn = {
            message: "success",
            result: doc,
          };
          // return {
          //   message: "succsess",
          //   result: doc,
          // };
        });
        conn.release();
      });
    });
  });

  console.log("register :  ", registerReturn);
  return registerReturn;
};
