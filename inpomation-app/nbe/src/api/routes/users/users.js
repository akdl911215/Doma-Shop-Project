const db = require("../../middlewares/pool");
const crypto = require("crypto");
const pbkdf2 = require("pbkdf2");
const util = require("util");

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
  const hashPW = createHashedPassword(password);
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
  const { username, password, name, email, phone_number, address, roles } =
    req.body;
  const hashPW = createHashedPassword(password);
  console.log("hashPW : ", hashPW);
  if (hashPW === undefined || hashPW === "") {
    console.error(`비밀번호가 제대로 입력되지 않았습니다.`);
    throw err;
  }
  console.log("hashPW : ", hashPW);

  console.log(
    `username : ${req.body.username}, password : ${hashPW}, password2 : ${password}, name : ${req.body.name}, email : ${req.body.email}, phone_number : ${req.body.phone_number}, address : ${req.body.address}, roles : ${req.body.roles}`
  );

  db.getConnectionPool((conn) => {
    const sql = `INSERT INTO users(username, password, name, email, phone_number, address, roles) 
                        VALUES ('${username}','${hashPW}','${name}','${email}','${phone_number}','${address}', '${roles}')`;
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
let returnPW = "";
function createHashedPassword(plainPassword) {
  return crypto.randomBytes(64, (err, buf) => {
    // if (err) {
    //   console.error(`crypto randomBytes error ${err}`);
    //   throw err;
    // }
    crypto.pbkdf2(
      plainPassword,
      buf.toString("base64"),
      100000,
      64,
      "sha512",
      (err, key) => {
        // if (err) {
        //   console.error(`cryto salt error ${err}`);
        //   throw err;
        // }
        returnPW = key.toString("base64");
        console.log("returnPW pbkdf2 : ", returnPW);
      }
    );
    console.log("randomBytes returnPW : ", returnPW);
  });
  // return returnPW;
}
// https://www.zerocho.com/category/NodeJS/post/593a487c2ed1da0018cff95d
// https://velog.io/@kaitlin_k/%EC%95%94%ED%98%B8%ED%99%94-%EB%B0%A9%EC%8B%9D
