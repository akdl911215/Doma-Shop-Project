const fs = require("fs");

console.log("시작");
fs.readFile("./readme2.txt", (err, data) => {
  if (err) throw err;
  console.log("1번", data.toString());
});
fs.readFile("./readme2.txt", (err, data) => {
  if (err) throw err;
  console.log("2번", data.toString());
});
fs.readFile("./readme2.txt", (err, data) => {
  if (err) throw err;
  console.log("3번", data.toString());
});
console.log("끝");

/*
시작
끝
1번 저를 여러 번 읽어보세요.
3번 저를 여러 번 읽어보세요.
2번 저를 여러 번 읽어보세요.

주의 시작,끝을 제외하고는 비동기이기 때문에 결과값이 매번 다를 수 있음
*/
