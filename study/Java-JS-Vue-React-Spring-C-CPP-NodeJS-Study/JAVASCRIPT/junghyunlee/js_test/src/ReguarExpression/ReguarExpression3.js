/*
    플래그 종류
    i > Ignore Case > 대소문자를 구별하지 않고 검색한다.
    g > Clobal > 문자열 내의 모든 패턴을 검색한다.
    m > Multi Line > 문자열의 행이 바뀌더라도 검색을 계속한다. 
*/

const targetStr = "Is this all there is?";

// 문자열 is를 대소문자를 구별하여 한번만 검색한다.
let regexr = /is/;

console.log(targetStr.match(regexr)); // [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]

// 문자열 is를 대소문자를 구별하지 않고 대상 문자열을 끝까지 검색한다.
regexr = /is/gi;

console.log(targetStr.match(regexr)); // [ 'Is', 'is', 'is' ]
console.log(targetStr.match(regexr).length); // 3
