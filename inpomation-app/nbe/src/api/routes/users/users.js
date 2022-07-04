const db = require("../../middlewares/pool");
const crypto = require("crypto");
const { rejects } = require("assert");
const { resolve } = require("path");

exports.userLogout = (req, res) => {
  console.log("로그아웃");

  delete req.session.username;
  delete req.session.password;
  delete req.session.isLogined;
  req.session.save(() => res.redirect("/"));
};

exports.userSignin = (req, res) => {
  console.log("로그인");

  const { username, password } = req.body;
  const hashPW = hashPassword(password);
  console.log(`username : ${username}, password : ${hashPW}`);

  db.getConnectionPool((connection) => {
    console.log(`connection : ${connection}`);

    const usernameSql = `SELECT * FROM users WHERE username = '${username}'`;
    connection.query(usernameSql, (err, rows) => {
      console.log(`rows : ${rows}`);
      if (rows.length) {
        if (rows[0].username === username) {
          const passwordSql = `SELECT * FROM users WHERE password = '${hashPW}'`;
          connection.query(passwordSql, (err, rows) => {
            if (err) {
              console.error(`username error : ${err}`);
              throw err;
            }

            if (rows.length) {
              req.session.username = rows[0].username;
              req.session.password = rows[0].password;
              req.session.isLogined = true;
              req.session.save(() => {
                res.json({
                  result: "로그인 성공",
                });
              });
              console.log(`req.session : ${req.session}`);

              for (let key in req.session) {
                console.log(`attr: ${key}, value: ${req.session}`);
              }
            } else {
              res.json({
                result: "비밀번호 틀렸습니다.",
              });
            }
          });
        }
      } else {
        // 아이디 틀렸을경우
        res.json({
          result: "아이디가 틀렸습니다.",
        });
      }
    });
  });
};

exports.userRegister = (req, res) => {
  // const { username, password, name, email, phone_number, address, roles } =
  //   req.body;
  const { password, salt } = createHashedPassword(req.body.password);
  console.log("password : ", password);
  console.log("salt : ", salt);

  console.log(
    `username : ${req.body.username}, password : ${password}, name : ${req.body.name}, email : ${req.body.email}, phone_number : ${req.body.phone_number}, address : ${req.body.address}, roles : ${req.body.roles}, salt : ${salt}`
  );

  db.getConnectionPool((conn) => {
    const sql = `INSERT INTO users(username, password, name, email, phone_number, address, roles, salt) 
                        VALUES ('${username}','${password}','${name}','${email}','${phone_number}','${address}', '${roles}', '${salt})`;
    conn.query(sql, (err, doc) => {
      if (err) console.log(`err : ${err}`);
      res.send({
        message: "success",
        result: doc,
      });
    });
    conn.release();
  });
};

function createSalt() {
  new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) reject(err);
      resolve(buf.toString("base64"));
    });
  }).catch((err) => console.error(`createSalt error : ${err}`));
}

function createHashedPassword(plainPassword) {
  new Promise(async (resolve, reject) => {
    const salt = createSalt();
    crypto.pbkdf2(plainPassword, salt, 999, 64, "sha512", (err, key) => {
      if (err) reject(err);
      resolve({ password: key.toString("base64"), salt });
    });
  }).catch((err) => console.error(`createHashedPassword error : ${err}`));
}
// https://zinirun.github.io/2020/12/02/node-crypto-password/
