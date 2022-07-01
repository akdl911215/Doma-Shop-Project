const db = require('../../middlewares/pool');
const crypto = require('crypto');

exports.userLogout = (req, res) => {
    console.log("로그아웃")

    delete req.session.username;
    delete req.session.password;
    delete req.session.isLogined;
    req.session.save(() => res.redirect('/'))
}

exports.userSignin = (req, res) => {
    console.log("로그인")
    
    const { username, password } = req.body;
    console.log(`username : ${username}, password : ${password}`)

    db.getConnectionPool((connection) => {
        console.log(`connection : ${connection}`);

        const usernameSql = `SELECT * FROM users WHERE username = '${username}'`;
        connection.query(usernameSql, (err, rows) => {
            console.log(`rows : ${rows}`)
            if(rows.length) {
                if(rows[0].username === username) {
                    const passwordSql = `SELECT * FROM users WHERE password = '${password}'`;
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
                                    result: "로그인 성공"
                                })
                            })
                            console.log(`req.session : ${req.session}`)

                            for (let key in req.session) {
                                console.log(`attr: ${key}, value: ${req.session}`)
                            }
                        }
                        else {
                            res.json({
                                result: "비밀번호 틀렸습니다."
                            })
                        }
                    })
                }
            }
            else {
                // 아이디 틀렸을경우
                res.json({
                    result: "아이디가 틀렸습니다."
                })
            }
        })
    }) 
    
}

exports.userRegister = (req, res) => {
    const { username, password, name, email, phone_number, address, roles } = req.body;
    console.log(`username : ${username}, password : ${hashPassword(password)}, name : ${name}, email : ${email}, phone_number : ${phone_number}, address : ${address}, roles : ${roles}`)
    
    db.getConnectionPool((conn) => {
        const sql = `INSERT INTO users(username, password, name, email, phone_number, address, roles) 
                        VALUES ('${username}','${hashPassword(password)}','${name}','${email}','${phone_number}','${address}', '${roles}')`;
        conn.query(sql, (err, doc) => {
            if (err) console.log(`err : ${err}`);
            res.send({
                message: "success",
                result: doc
            });

        })
        conn.release();
    })
}

function hashPassword(password) {
    const salt = crypto.randomBytes(32).toString('hex');
    return crypto.pbkdf2Sync(password, salt, 1, 32, 'sha512').toString('hex');
}
// 내장 모듈인 crypto를 사용하기 위해 불러와준 후,
// randomBytes를 통해 salt를 생성해 줍니다. randomBytes의 인자로 문자열의 size를 넣어주고, toString 메소드에 인코딩 방식을 인자로 넣어주면 됩니다.
// 즉 const salt = crypto.randomBytes(32).toString('hex') 는 32의 문자열 길이를 가진 랜덤 문자열을 hex 형식으로 인코딩 한다는 뜻 입니다.
// 그리고 pbkdf2Sync 를 통해 암호화를 진행해줍니다.
// pbkdf2Sync 의 인자로는 ( 암호화 할 비밀번호, Salt, 반복 횟수, 문자열 길이, 암호화 알고리즘) 순서대로 들어가게 됩니다.
// 그리고 아까 randomBytes와 같이 마지막에 toString을 통해 인코딩 방식을 정해줍니다.