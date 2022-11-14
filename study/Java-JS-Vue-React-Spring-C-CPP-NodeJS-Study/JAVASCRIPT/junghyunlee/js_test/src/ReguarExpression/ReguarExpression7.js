const targetStr = "AA BB ZZ Aa Bb";

// 'A' ~ 'Z'가 한번 이상 한복되는 문자열을 반복 검색
// 'A', 'AA', 'AAA' ... 또는 'B', 'BB', 'BBB', ... 또는 'Z', 'ZZ', 'ZZZ', ...

const regexr = /[A-Z]+/g;
// regexr2 와 regexr3 은 동일하다.
const regexr2 = /[A-Z]+/gi;
const regexr3 = /[A-Za-z]+/g;

console.log(targetStr.match(regexr)); // [ 'AA', 'BB', 'ZZ', 'A', 'B' ]
console.log(targetStr.match(regexr2)); // [ 'AA', 'BB', 'ZZ', 'Aa', 'Bb' ]
console.log(targetStr.match(regexr3)); // [ 'AA', 'BB', 'ZZ', 'Aa', 'Bb' ]
