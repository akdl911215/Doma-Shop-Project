const http = require("http");

const server = http.createServer((req, res) => {
  res.write("<h1>Hello Node!</h1>");
  res.end("<p>Hello Server!</p>");
});
server.listen(8080);
server.on("listening", () => console.log("8080번 포트에서 서버 대기 중"));
server.on("error", (error) => console.error(error));
/*
listen 메서드에 콜백을 넣는 대신, 서버에 listening 이벤트 리스너를 붙여도 된다.
res.write : 클라이언트로 보낼 데이터. 지금은 HTML 모양의 문자열을 보냈지만 버퍼를 보 낼 수도 있다.
            또한, 여러 번 호출해서 데이터를 여러 개 보내도 된다.
res.end : 응답을 종료하는 메서드. 만약 인자가 있다면 그 데이터도 클라이언트로 보내고 응답을 종료.

따라서, res.write에서 <h1>Hello Node!</h1> 문자열을 한 번, res.end에서 <p>Hello Server!</p> 문자열을
한 번 클라이언트로 보낸 후 응답이 종료된 것이다. 브라우저는 응답 내용을 받아서 렌더링한다.
*/
