const buffer = Buffer.from("저를 버퍼로 바꿔주세요");
// from(문자열) : 문자열을 버퍼로 바꿀 수 있다. length 속성은 버퍼의 크기를 알려준다. 바이트 단위
console.log("from() : ", buffer);
console.log("length : ", buffer.length);
console.log("toString() : ", buffer.toString());
// toString(버퍼) : 버퍼를 다시 문자열로 바꿀 수 있따. 이때 base64나 hex를 인자로 넣으면 해당 인코딩으로도 변환할 수 있다.

const array = [
  Buffer.from("띄엄 "),
  Buffer.from("띄엄 "),
  Buffer.from("띄어쓰기"),
];
const buffer2 = Buffer.concat(array);
// concat(배열) : 배열 안에 든 버퍼들은 하나로 합친다.
console.log("concat() : ", buffer2.toString());

const buffer3 = Buffer.alloc(5);
// alloc(바이트) : 빈 버퍼를 생성한다. 바이트를 인자로 지정해주면 해당 크기의 버퍼가 생성
console.log("alloc() : ", buffer3);

/*
from() :  <Buffer ec a0 80 eb a5 bc 20 eb b2 84 ed 8d bc eb a1 9c 20 eb b0 94 ea bf 94 ec a3 bc ec 84 b8 ec 9a 94>
length :  32
toString() :  저를 버퍼로 바꿔주세요
concat() :  띄엄 띄엄 띄어쓰기      
alloc() :  <Buffer 00 00 00 00 00>  
*/
