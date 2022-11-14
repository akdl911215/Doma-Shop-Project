// 기명 함수 표현식
var namedFunc = function foo() {}
console.log('nameFunc : ', namedFunc.name) // 출력 : foo


// 익명 함수 표현식
var anonymousFunc = function() {}
// ES5 : name 프로퍼티는 빈문자열을 값으로 갖는다
// ES6 : name 프로퍼티는 함수 객체를 가리키는 변수 이름을 값으로 갖는다
console.log('anonymousFunc : ', anonymousFunc.name) // 출력 : anonymousFunc


// 함수 선언문(Function declaraton)
function bar() {}
console.log('bar : ', bar.name) // 출력 : bar