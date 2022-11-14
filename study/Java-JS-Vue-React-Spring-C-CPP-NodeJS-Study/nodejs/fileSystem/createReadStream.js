const fs = require("fs");

const readStream = fs.createReadStream("./readme3.txt", { highWaterMark: 16 });
// highWaterMark 옵션이 버퍼의 크기(바이트 단위)를 정할 수 있는 옵션
const data = [];

// readStream은 이벤트 리스너를 붙여서 사용한다. 보통 data, end, error 이벤트를 사용한다.
// readStream.on('data') 같이 이벤트 리스너를 붙이면 된다. 파일을 읽는 도중 에러가 발생하면
// error 이벤트가 호출되고, 파일 읽기가 시작되면 data 이벤트가 발생한다. 16B씩 읽도록 설정했으며
// 파일 크기가 16B보다 크다면 여러 번 발생한다. 파일을 다 읽으면 end 이벤트가 발생한다.
readStream.on("data", (chunk) => {
  data.push(chunk);
  console.log("data : ", chunk, chunk.length);
});

readStream.on("end", () =>
  console.log("end : ", Buffer.concat(data).toString())
);

readStream.on("error", (err) => console.log("error", err));

/*
data :  <Buffer ec a0 80 eb 8a 94 20 ec a1 b0 ea b8 88 ec 94 a9> 16
data :  <Buffer 20 ec a1 b0 ea b8 88 ec 94 a9 20 eb 82 98 eb 88> 16
data :  <Buffer a0 ec 84 9c 20 ec a0 84 eb 8b ac eb 90 a9 eb 8b> 16
data :  <Buffer 88 eb 8b a4 2e 20 0d 0a eb 82 98 eb 88 a0 ec a7> 16
data :  <Buffer 84 20 ec a1 b0 ea b0 81 ec 9d 84 20 63 68 75 6e> 16
data :  <Buffer 6b eb 9d bc ea b3 a0 20 eb b6 80 eb a6 85 eb 8b> 16
data :  <Buffer 88 eb 8b a4 2e> 5
end :  저는 조금씩 조금씩 나눠서 전달됩니다. 
나눠진 조각을 chunk라고 부릅니다.
*/
