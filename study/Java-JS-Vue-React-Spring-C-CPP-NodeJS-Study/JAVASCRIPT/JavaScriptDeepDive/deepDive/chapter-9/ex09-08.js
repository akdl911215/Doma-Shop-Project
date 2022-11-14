let boolean1 = 'Cat' && 'Dog'
console.log(typeof boolean1, boolean1) // Dog

let boolean2 = 'Cat' || 'Dog'
console.log(typeof boolean2, boolean2) // Cat

// 논리합(||) 연산자
let boolean3 = 'Cat' || 'Dog'
console.log(typeof boolean3, boolean3) // Cat

let boolean4 = false || 'Dog'
console.log(typeof boolean4, boolean4) // Dog

let boolean5 = 'Cat' || false 
console.log(typeof boolean5, boolean5) // Cat

let boolean6 = true || 'Dog'
console.log(typeof boolean6, boolean6) // true

let boolean7 = 'Cat' || true
console.log(typeof boolean7, boolean7) // Cat

// 논리곱(&&) 연산자
let boolean8 = 'Cat' && 'Dog' 
console.log(typeof boolean8, boolean8) // Dog

let boolean9 = false && 'Dog'
console.log(typeof boolean9, boolean9) // false

let boolean10 = 'Cat' && false
console.log(typeof boolean10, boolean10) // false