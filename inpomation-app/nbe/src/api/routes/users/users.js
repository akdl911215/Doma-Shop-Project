const db = require("../../middlewares/pool");
const crypto = require("crypto");

exports.userLogout = (req, res) => {
  console.log("로그아웃");

  delete req.session.username;
  delete req.session.password;
  delete req.session.isLogined;
  req.session.save(() => res.redirect("/"));
};

exports.userSignin = (req, res) => {
  crypto.randomBytes(64, (err, buf) => {
    console.log("로그인");

    const { username, password } = req.body;

    const usernameSql = `SELECT * FROM users WHERE username = '${username}'`;
    db.getConnectionPool((connection) => {
      connection.query(usernameSql, (err, rows) => {
        console.log(`connection : ${connection}`);
        crypto.pbkdf2(
          password,
          rows[0].salt,
          100000,
          64,
          "sha512",
          async (err, key) => {
            const hashedPassword = key.toString("base64");
            console.log(`username : ${username}, password : ${hashedPassword}`);

            if (rows.length) {
              if (rows[0].username === username) {
                if (rows[0].password === hashedPassword) {
                  const passwordSql = `SELECT * FROM users WHERE password = '${hashedPassword}'`;
                  connection.query(passwordSql, (err, rows) => {
                    if (err) {
                      console.error(`username error : ${err}`);
                      throw err;
                    }
                    const hour = 3600000;
                    if (rows.length) {
                      req.session.username = rows[0].username;
                      // req.session.password = rows[0].password;
                      req.session.isLogined = true;
                      req.session.cookie.expires = new Date(Date.now() + hour);
                      req.session.cookie.maxAge = hour;
                      req.session.save(() => {
                        res.json({
                          result: "로그인 성공",
                        });
                        // res.redirect("/");
                      });
                      console.log("req.session : ", req.session);

                      for (let key in req.session) {
                        console.log("attr : ", key, ", value : ", req.session);
                      }
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
      });
    });
  });
};

exports.userRegister = (req, res) => {
  crypto.randomBytes(64, (err, buf) => {
    if (err) {
      console.error(`crypto randomBytes error ${err}`);
      throw err;
    }

    const { username, password, name, email, phone_number, address, roles } =
      req.body;

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
        `username : ${req.body.username}, password : ${hashedPassword}, password2 : ${password}, name : ${req.body.name}, email : ${req.body.email}, phone_number : ${req.body.phone_number}, address : ${req.body.address}, roles : ${req.body.roles}`
      );

      db.getConnectionPool((conn) => {
        const sql = `INSERT INTO users(username, password, name, email, phone_number, address, roles, salt) 
                              VALUES ('${username}','${hashedPassword}','${name}','${email}','${phone_number}','${address}', '${roles}', '${salt}')`;
        conn.query(sql, (err, doc) => {
          if (err) console.log(`err : ${err}`);
          res.send({
            message: "success",
            result: doc,
          });
        });
        conn.release();
      });
    });
  });
};
