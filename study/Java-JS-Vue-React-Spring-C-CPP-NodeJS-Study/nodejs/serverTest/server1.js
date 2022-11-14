const http = require("http");

http
  .createServer((req, res) => {
    // 여기에 어떻게 응답할지 적어준다.

    res.write("<h1>Hello Node!</h1>");
    res.end("<p>Hello Server!</p>");
  })
  .listen(8080, () => console.log("8080번 포트에서 서버 대기 중!!!"));

/*
createServer의 콜백 부분을 보면 req와 res 매개변수가 있다. 
req : 요청에 관한 정보들
res : 응답에 관한 정보들 담는다.
*/
