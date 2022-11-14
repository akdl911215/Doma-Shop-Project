// 조건이 Falsy 값(거짓으로 평가되는 값)일 때 무언가를 해야 한다면 논리합(||) 연산자
// 표현식으로 if 문을 대체할 수 있다.

var done = false;
var message = '';

// 주어진 조건이 false일 때
if (!done) message = '미완료'

// if 문은 단축 평가로 대체 가능하다.
// done이 flase라면 message에 '미완료'를 할당
message = done || '미완료'
console.log('message : ' , message)