const targetStr = "This is a pen.";
const regexr = /is/gi;
const regexr2 = /his/gi;

// RegExp 객체의 메소드
console.log(regexr.exec(targetStr)); // [ 'is', index: 2, input: 'This is a pen.', groups: undefined ]
console.log(regexr.test(targetStr)); // true

// String 객체의 메소드
console.log(targetStr.match(regexr)); // [ 'is', 'is' ]
console.log(targetStr.match(regexr2)); // [ 'is', 'is' ]
console.log(targetStr.replace(regexr, "IS")); // ThIS IS a pen.

// String.parototype.search는 검색된 문자열의 첫번째 인덱스를 반환한다.
console.log(targetStr.search(regexr)); // 2
console.log(targetStr.split(regexr)); // [ 'Th', ' ', ' a pen.' ]
