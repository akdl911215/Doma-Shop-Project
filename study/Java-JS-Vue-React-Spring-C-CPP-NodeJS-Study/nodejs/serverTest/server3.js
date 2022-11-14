const http = require("http");

const parseCookies = (cookie = "") =>
  cookie
    .split(";") // split()는 String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눈다.
    .map((v) => v.split("="))
    .map(([k, ...vs]) => [k, vs.join("=")])
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

/*
parseCookies 함수를 만들었다. 쿠키는 name=junghyun;year=1991처럼 문자열 형식으로 오므로
이를 { name: 'junghyun', year: '1991' }와 같이 객체로 바꾸는 함수이다.
*/

http
  .createServer((req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    console.log(req.url, cookies);
    res.writeHead(200, { "Set-Cookie": "mycookie=test" });
    res.end("Hello Cookie");
  })
  .listen(8082, () => console.log("8082번 포트에서 서버 대기 중!"));

/*
createServer 메서드의 콜백에서는 제일 먼저 req 객체에 담겨 있는 쿠키를 분석한다. 쿠키는 
req.headers.cookie에 들어 있다. req.headers는 요청의 헤더를 의미한다. 
응답의 헤더에 쿠키를 기록해야 하므로 res.writeHead 메서드를 사용한다.
첫 번째 인자로 200이라는 상태 코드를 넣어두었다. 200은 성공이라는 의미이다. 다른 상태 코드에
대해서는 참고에서 설명한다. 두 번째 인자로는 헤더의 내용을 입력한다. Set-Cookie는 브라우저한테
다음과 같은 값의 쿠키를 저장하라는 의미이다. 실제로 응답을 받은 브라우저는 mycookie=test 라는 
쿠키를 저장한다.


*/
