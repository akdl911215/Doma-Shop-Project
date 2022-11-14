const fs = require("fs");

const readStream = fs.createReadStream("readme4.txt");
const writeStream = fs.createWriteStream("writeme3.txt");
readStream.pipe(writeStream);

/*
createReadStream으로 파일을 읽고 그 스트림을 전달받아 createWriteStream으로 파일을 쓸 수도 있다.
파일 복사와 비슷하다. 스트림끼리 연결하는 것을 '파이핑한다'고 표현한다. 액체가 흐르는 관(파이프,pipe)
처럼 데이터ㅏ 흐른다고 해서 지어진 이름이다.

readme4.txt와 똑같은 내용의 writeme3.txt가 생성되었다.
*/
