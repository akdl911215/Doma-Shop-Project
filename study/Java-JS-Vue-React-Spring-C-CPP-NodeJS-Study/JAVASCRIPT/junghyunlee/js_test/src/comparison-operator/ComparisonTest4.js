// isNan 함수는 지정한 값이 NaN인지 확인하고 그 결과를 불리언 값으로 반환한다.
const a = isNaN(NaN) // true
console.log(a)

const b = isNaN(100) // false
console.log(b)

const c = isNaN(1 + undefined) // true
console.log(c)

const d = isNaN(false) // false
console.log(d)

// NaN은 자신과 일치하지 않는 유일한 값이다
const e = NaN === NaN; // false
console.log(e)