const targetStr = "AA AAA BB Aa Bb";

// 'A'가 한번 이상 반복되는 문자열('A', 'AA', 'AAA', ...)을 반복
const regexr = /A+/g;
const regexr2 = /AA+/g;
const regexr3 = /A+/gi;

console.log(targetStr.match(regexr)); // [ 'AA', 'AAA', 'A' ]
console.log(targetStr.match(regexr2)); //  'AA', 'AAA' ]
console.log(targetStr.match(regexr3)); // [ 'AA', 'AAA', 'Aa' ]

// | 를 사용하면 or의 의미
const regexr4 = /A|B/g;
const regexr5 = /A|B/;
const regexr6 = /A|B/gi;

console.log(targetStr.match(regexr4));
// [
//   'A', 'A', 'A',
//   'A', 'A', 'B',
//   'B', 'A', 'B'
// ]
console.log(targetStr.match(regexr5)); // [ 'A', index: 0, input: 'AA AAA BB Aa Bb', groups: undefined ]
console.log(targetStr.match(regexr6));
// [
//   'A', 'A', 'A', 'A',
//   'A', 'B', 'B', 'A',
//   'a', 'B', 'b'
// ]
