// 피연산자가 모두 문자열 타입이어야 하는 문맥
let a =  '10' + 2 // '102'
console.log(typeof a, a) // string 120

let b = 2 + '10' // '210' 
console.log(typeof b, b) // string 210
// int 와 string의 순서일 경우에는 + 하면 string으로 형변환이 된다.

let b2 = 2 * '10'
console.log(typeof b2, b2) // number 20

let b3 = 2 - '10'
console.log(typeof b3, b3) // number -8

let b4 = 2 / '10'
console.log(typeof b4, b4) // number 0.2

// 피연산자가 모두 숫자 타입이어야 하는 문맥
let c = 5 * '10' // 50
console.log(typeof c, c) // number 50

// 피연산자 또는 표현식이 불리언 타입이어야 하는 문맥
let d = !0
console.log(typeof d, d) // boolean true

