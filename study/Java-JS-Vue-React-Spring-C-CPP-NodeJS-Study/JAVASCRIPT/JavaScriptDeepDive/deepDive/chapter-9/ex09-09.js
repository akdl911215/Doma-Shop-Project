// 단축 평가를 사용하면 if문을 대체할 수 있다. 어떤 조건이 Truthy 값(참으로 평가되는 값) 일 때
// 무언가를 해야한다면 논리곱(&&) 연산자 표현식으로 if문을 대체할 수 있다.

var done = true;
var message = '';

// 주어진 조건이 true일 때
if (done) message = '완료';

// if 문은 단축 평가로 대체 가능하다.
// done이 true라면 message에 '완료'를 할당
message = done && '완료'
console.log("message : ", message) // message : 완료

