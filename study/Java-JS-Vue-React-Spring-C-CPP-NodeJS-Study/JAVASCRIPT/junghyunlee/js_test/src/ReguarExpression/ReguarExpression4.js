const targetStr = "AA BB Aa Bb";
const targetStr2 = "010-1234-8975";
const targetStr3 = "09:00:12";

// . 은 임의의 문자 한 개를 의미한다. 문자의 내용은 무엇이든지 상관없다.
const regexr = /.../;

console.log(targetStr.match(regexr)); // [ 'AA ', index: 0, input: 'AA BB Aa Bb', groups: undefined ]
console.log(targetStr2.match(regexr)); // [ '010', index: 0, input: '010-1234-8975', groups: undefined ]
const tmp = targetStr3.match(regexr);
console.log(tmp); // [ '09:', index: 0, input: '09:00:12', groups: undefined ]
console.log(tmp[0]); // 09:
console.log(tmp[1]); // undefined
console.log(tmp.index); // 0
console.log(tmp[2]); // undefined
console.log(tmp.input); // 09:00:12
console.log(tmp[3]); // undefined

// 임의의 문자 3개를 반복하여 검색
const regexr2 = /.../g;

console.log(targetStr.match(regexr2)); // [ 'AA ', 'BB ', 'Aa ' ]
console.log(targetStr2.match(regexr2)); // [ '010', '-12', '34-', '897' ]
console.log(targetStr3.match(regexr2)); // [ '09:', '00:' ]

// 모든 문자를 선택하려면 .와 g를 동시에 지정한다.
const regexr3 = /./g;

console.log(targetStr.match(regexr3));
// [
//   'A', 'A', ' ', 'B',
//   'B', ' ', 'A', 'a',
//   ' ', 'B', 'b'
// ]

// 'A'를 검색
const regexr4 = /A/;

console.log(targetStr.match(regexr4)); // [ 'A', index: 0, input: 'AA BB Aa Bb', groups: undefined ]

// 'A'를 대소문자 구분없이 반복 검색
const regexr5 = /A/gi;

console.log(targetStr.match(regexr5)); // [ 'A', 'A', 'A', 'a' ]
