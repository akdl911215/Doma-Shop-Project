const targetStr = "AA AAA BB Aa Bb";

const regexr = /A+|B+/g;

console.log(targetStr.match(regexr)); // [ 'AA', 'AAA', 'BB', 'A', 'B' ]

// 위 방법을 간단히 표기. [] 내의 문자는 or로 동작
const regexr2 = /[AB]+/g;

console.log(targetStr.match(regexr2)); // [ 'AA', 'AAA', 'BB', 'A', 'B' ]
