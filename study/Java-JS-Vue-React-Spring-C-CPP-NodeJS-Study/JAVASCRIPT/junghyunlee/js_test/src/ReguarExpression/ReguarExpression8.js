const targetStr = "AA BB 010-5124-4510";
const targetStr2 = "200,000";
const targetStr3 = "09:00:12";

// '0' ~ '9'가 한번 이상 반복되는 문자열을 반복 검색
const regexr = /[0-9]+/g;

console.log(targetStr.match(regexr)); // [ '010', '5124', '4510' ]
console.log(targetStr2.match(regexr)); // [ '200', '000' ]
console.log(targetStr3.match(regexr)); // [ '09', '00', '12' ]

// '0' ~ '9' 또는 ',', '-', ':'가 한번 이상 반복되는 문자열을 반복 검색
const regexr2 = /[0-9,:-]+/g;

console.log(targetStr.match(regexr2)); // [ '010-5124-4510' ]
console.log(targetStr2.match(regexr2)); // [ '200,000' ]
console.log(targetStr3.match(regexr2)); // [ '09:00:12' ]

// \d는 숫자, \D는 숫자가 아닌 문자
const regexr3 = /[\d,]+/g;
const regexr4 = /[\D,]+/g;

// targetStr = "AA BB 010-5124-4510"
console.log(targetStr.match(regexr3)); // [ '010', '5124', '4510'
console.log(targetStr.match(regexr4)); // [ 'AA BB ', '-', '-' ]

// \w 알파벳과 숫자, \W 알파벳과 숫자가 아닌 문자
const regexr5 = /[\w,]+/g;
const regexr6 = /[\W,]+/g;

// targetStr = "AA BB 010-5124-4510"
console.log(targetStr.match(regexr5)); // [ 'AA', 'BB', '010', '5124', '4510' ]
console.log(targetStr.match(regexr6)); // [ ' ', ' ', '-', '-' ]
