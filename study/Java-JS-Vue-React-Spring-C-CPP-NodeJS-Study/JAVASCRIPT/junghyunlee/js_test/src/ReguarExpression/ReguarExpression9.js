const url = "http://naver.com";

// 'http'로 시작하는지 검사
// ^ : 문자열의 처음을 의미한다.
const regexr = /^http/;

console.log(regexr.test(url)); // true

// 'com'로 끝나는지 검사
// $ : 문자열의 끝을 의미한다.
const regexr2 = /com$/;

console.log(regexr2.test(url)); // true

//
const number = "12345";
const number2 = "a12345";
const number3 = "12345a";
const number4 = "A12345a";

// 모두 숫자인지 검사
// [^] : 부정(not)을 의미한다. 예를 들어 [^a-z]는 알파벳 소문자로 시작하지 않는 모든 문자를 의미
// [] 바깥의 ^는 문자열의 처음을 의미
const regexr3 = /^\d+$/;
console.log(regexr3.test(number)); // true
console.log(regexr3.test(number2)); // false
console.log(regexr3.test(number3)); // false

const regexr4 = /[^a-z]/;
console.log("??");
console.log(regexr4.test(number)); // true
console.log(regexr4.test(number2)); // true
console.log(regexr4.test(number3)); // true
console.log(regexr4.test(number4)); // true
