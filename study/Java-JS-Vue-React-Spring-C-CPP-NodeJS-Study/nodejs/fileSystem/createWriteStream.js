const fs = require("fs");

const writeStream = fs.createWriteStream("./writeme2.txt");
// createWriteStream()으로 쓰기 스트림을 만든어준다. 첫 번째 인자로는 출력 파일명을 입력한다.
// 두 번째 인자는 옵션인데, 여기서는 사용하지 않는다.
writeStream.on("finish", () => console.log("파일 쓰기 완료"));
// finish 이벤트 리스너도 붙여주었다. 파일 쓰기가 종료되면 콜백 함수가 호출

// write() 메서드로 넣을 데이터를 쓴다. 여러번 호출이 가능
// 데이터를 다 썼다면 end()로 종료를 알려주면 finish 이벤트가 발생한다.
writeStream.write("이 글을 씁니다.\n");
writeStream.write("한 번 더 씁니다.");
writeStream.end();
