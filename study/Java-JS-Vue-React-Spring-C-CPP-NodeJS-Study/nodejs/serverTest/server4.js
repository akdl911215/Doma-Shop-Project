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

http
  .createServer((req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    if (req.url.startsWith("/login")) {
      const { query } = url.parse(req.url);
      const { name } = qs.parse(query);
      const expires = new Date();
      // Expires=날짜 : 만료 기한입니다. 이 기한이 지나면 쿠키를 제거된다. 기본값은 클라이언트가 종료될 때 까지
      expires.setMinutes(expires.getMinutes() + 5);
      res.writeHead(302, {
        Location: "/",
        "Set-Cookie": `name=${encodeURIComponent(
          name
        )}; Expires=${expires.toGMTString()}; HttpOnly; path=/`,
      });
      // 쿠키를 설정할 때 만료 시간(Expires)과 HttpOnly, Path 같은 옵션을 부여했다.
      // 쿠키는 설정할 때 각종 옵션들을 넣을 수 있다. 옵션 간에는 세미콜론(;)으로 구분한다.

      // Path=URL : 쿠키가 전송될 URL을 특정할 수 있다. 기본값은 '/'이고 이 경우 모든
      //            URL에서 쿠키를 전송할 수 있다.

      // HttpOnly : 설정 시 자바스크립트에서 쿠키에 접근할 수 없다. 쿠키 조작을 방지하기 위해 설정하는 것이 좋다.

      res.end();
    } else if (cookies.name) {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(`${cookies.name}님 안녕하세요`);
    } else {
      fs.readFile("./server4.html", (err, data) => {
        if (err) throw err;
        res.end(data);
      });
    }
  })
  .listen(8083, () => console.log("8083번 포트에서 서버 대기 중!!"));

// Max-age=초 : Expires와 비슷하지만 나짜 대신 초를 입력할 수 있다. 해당 초가 지나면
// 쿠키가 제거 된다. Expires보다 우선된다.

// Domain=도메인명 : 쿠키가 전송될 URL을 특정할 수 있다. 기본값은 '/'이고 이 경우 모든
// URL에서 쿠키를 전송할 수 있다.

// Secure : HTTPS일 경우에만 쿠키가 전송된다.
