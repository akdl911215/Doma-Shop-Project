let a = 1 - '1'
console.log('a : ', typeof a, a); // number 0

let b = 1 * '10'
console.log('b : ', typeof b, b); // number 10

let c = 1 / 'one'
console.log('c : ', typeof c, c) // number NaN

let d = '1' > 0
console.log('d : ', typeof d, d) // boolean true
// boolean은 숫자타입이어야 하기에 피연산자를 숫자 타입으로 변환한다.

// 문자열 타입
let e = + '';
console.log('e : ', typeof e, e) // number 0

let e2 = + '0';
console.log('f : ', typeof e2, e2) // number 0

let e3 = + '1';
console.log('g : ', typeof e3, e3) // number 1

let e4 = + 'string';
console.log('h : ', typeof e4, e4) // number NaN

// 불리언 타입
let e5 = + true;
console.log('i : ', typeof e5, e5) // number 1

let e6 = + false;
console.log('j : ', typeof e6, e6) // number 0

// null 타입
let e7 = + null;
console.log('k : ', typeof e7, e7) // number 0

// undefind 타입
let e8 = + undefined;
console.log('l : ', typeof e8, e8) // number NaN

// 심벌 타입
// let e9 = + Symbol();
// console.log(typeof e9, e9)



