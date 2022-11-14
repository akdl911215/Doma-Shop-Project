const http = require("http");
const fs = require("fs");
const url = require("url");
const qs = require("querystring");

const parseCookies = (cookie = "") =>
  cookie
    .split(";")
    .map((v) => v.split("="))
    .map(([k, ...vs]) => [k, vs.join("=")])
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

const session = {};

http
  .createServer((req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    if (req.url.startsWith("/login")) {
      const { query } = url.parse(req.url);
      const { name } = qs.parse(query);
      const expires = new Date();
      expires.setMinutes(expires.getMinutes() + 5);
      const randomInt = Date.now();
      session[randomInt] = {
        name,
        expires,
      };
      res.writeHead(302, {
        Location: "/",
        "Set-Cookie": `session=${randomInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
      });
      res.end();
    } else if (
      // cookie.sesion이 있고 만료 기한을 넘기지 않았다면 session 변수에서 사용자 정보를 가져와서 사용한다.
      cookies.session &&
      session[cookies.session].expires > new Date() // 쿠키에 이름을 담아서 보내는 대신, randomInt라는 임의의 숫자를 보낸다.
    ) {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(`${session[cookies.session].name}님 안녕하세요`);
    } else {
      fs.readFile("./server4.html", (err, data) => {
        if (err) throw err;
        res.end(data);
      });
    }
  })
  .listen(8084, () => console.log("8084번 포트에서 서버 대기 중!!"));

/*
이 방식이 세션. 서버에 사용자 정보를 저장하고 클라이언트와 세션 아이디로만 소통한다.
세션 아이디는 꼭 쿠키를 사용해서 주고 받지 않아도 된다. 
*/
